import type { Entity } from "./entities";
import type { EventDate } from "./event_dates";

export const EventStatus = {
  DRAFT: { value: 0, label: "draft", color: "gray" },
  PUBLISHED: { value: 1, label: "published", color: "green" },
} as const;

export const eventStatuses = Object.values(EventStatus);
export type EventStatusValue = (typeof EventStatus)[keyof typeof EventStatus]["value"];
export type EventStatusLabel = (typeof EventStatus)[keyof typeof EventStatus]["label"];

export interface EventID {
  id: string;
}

export interface EventFields {
  entityId: string;
  name: string;
  slug: string;
  description: string | null;
  shortDescription: string | null;
  posterUrl: string | null;
  coverUrl: string | null;
  upcomingUrl: string | null;
  hotUrl: string | null;
  eventDetailCoverUrl: string | null;
  eventDetailPosterUrl: string | null;
  heroLayout: string | null;
  heroStyle: string | null;
  isPublic: boolean | null;
  status: EventStatusValue;
  createdAt: Date | null;
}

export interface EventUpsert extends Partial<EventID>, Partial<EventFields> { }

export interface Event extends EventID, EventFields {
  entity?: Entity;
  dates?: EventDate[];
}
