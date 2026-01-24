import type { Event } from "./event";

export const EventGroupStatus = {
  PUBLISHED: { value: 1, label: "published" },
  UNPUBLISHED: { value: 0, label: "unpublished" },
} as const;
export const eventGroupStatuses = Object.values(EventGroupStatus);
export type EventGroupStatusValue =
  (typeof EventGroupStatus)[keyof typeof EventGroupStatus]["value"];
export type EventGroupStatusLabel =
  (typeof EventGroupStatus)[keyof typeof EventGroupStatus]["label"];

export const EventGroupType = {
  SOLO: { value: 0, label: "solo" },
  TOUR: { value: 1, label: "tour" },
  SERIES: { value: 2, label: "series" },
  FESTIVAL: { value: 3, label: "festival" },
  COLLABORATION: { value: 4, label: "collaboration" },
  CONFERENCE: { value: 5, label: "conference" },
} as const;
export const eventGroupTypes = Object.values(EventGroupType);
export type EventGroupTypeValue =
  (typeof EventGroupType)[keyof typeof EventGroupType]["value"];
export type EventGroupTypeLabel =
  (typeof EventGroupType)[keyof typeof EventGroupType]["label"];

export interface EventGroupID {
  id: string;
}

export interface EventGroupFields {
  name: string;
  description: string;
  type: EventGroupTypeValue;
  status: EventGroupStatusValue;
}

export interface EventGroup extends EventGroupID, EventGroupFields {
  events?: Event[];
  created_at?: number;
  updated_at?: number;
  deleted_at?: number | null;
}

export interface EventGroupUpsert
  extends Partial<EventGroupID>,
    Partial<EventGroupFields> {}

export interface EventGroupCreate
  extends EventGroupID,
    Required<EventGroupFields> {}

export interface EventGroupUpdate
  extends EventGroupID,
    Partial<EventGroupFields> {}
