import type { EventTemplate } from "./event_template";
import type { Timezones } from "./timezone";

export const EventStatus = {
  DRAFT: { value: 0, label: "draft" }, // Initial state, setup phase
  CONFIGURED: { value: 1, label: "configured" }, // Seats and sections are set up
  PRESELLING: { value: 2, label: "preselling" }, // Tickets are available for purchase when preselling
  ON_SALE: { value: 3, label: "on-sale" }, // Tickets are available for purchase regular sale
  SOLD_OUT: { value: 4, label: "sold-out" }, // All tickets have been sold
  UPCOMING: { value: 5, label: "upcoming" }, // Event date is near (e.g., within 7 days)
  ACTIVE: { value: 6, label: "active" }, // Event is currently happening
  COMPLETED: { value: 7, label: "completed" }, // Event has finished
  CANCELLED: { value: 8, label: "cancelled" }, // Event was cancelled
} as const;

export const eventStatuses = Object.values(EventStatus);
export type EventStatusValue =
  (typeof EventStatus)[keyof typeof EventStatus]["value"];
export type EventStatusLabel =
  (typeof EventStatus)[keyof typeof EventStatus]["label"];

export const EventPageStatus = {
  UNPUBLISHED: { value: 0, label: "unpublished" }, // Initial state, setup phase
  PUBLISHED: { value: 1, label: "published" }, // Seats and sections are set up
} as const;

export const eventPageStatuses = Object.values(EventPageStatus);
export type EventPageStatusValue =
  (typeof EventPageStatus)[keyof typeof EventPageStatus]["value"];
export type EventPageStatusLabel =
  (typeof EventPageStatus)[keyof typeof EventPageStatus]["label"];

export const EventType = {
  CONCERT: { value: 0, label: "concert" },
  FAN_MEET: { value: 1, label: "fan-meet" },
  CONFERENCE: { value: 2, label: "conference" },
  PLAY: { value: 3, label: "play" },
  SEMINAR: { value: 4, label: "seminar" },
  WORKSHOP: { value: 5, label: "workshop" },
  EXPO: { value: 6, label: "expo" },
  SPORTS: { value: 7, label: "sports" },
  FESTIVAL: { value: 8, label: "festival" },
  COMPETITION: { value: 9, label: "competition" },
  GALA: { value: 10, label: "gala" },
  COMEDY_SHOW: { value: 11, label: "comedy-show" },
  WEBINAR: { value: 12, label: "webinar" },
  MOVIE_SCREENING: { value: 13, label: "movie-screening" },
} as const;

export const eventTypes = Object.values(EventType);
export type EventTypeValue =
  (typeof EventType)[keyof typeof EventType]["value"];
export type EventTypeLabel =
  (typeof EventType)[keyof typeof EventType]["label"];

export interface EventID {
  id: string;
}

export interface EventFields {
  entity_id: string;
  venue_id: string;
  event_group_id: string;
  server_id: string | null;
  type: EventTypeValue;
  name: string;
  description?: string | null; // Made optional since it defaults to null
  banner_image_url?: string | null; // Made optional since it might not always be present
  status: EventStatusValue;
  page_status: EventPageStatusValue;
  event_date: string;
  sale_starts_at: string;
  sale_ends_at: string;
  sale_limit: number;
  service_charge: number;
  service_charge_currency: string;
  timezone: Timezones;
  server?: string | null; // Assuming it's an optional field with a default fallback
  background_image?: string | null;
  generated: boolean;
}

export interface Event extends EventID, EventFields {
  event_template?: EventTemplate;
  created_at?: number;
  updated_at?: number;
  deleted_at?: number | null; // Made optional since it defaults to null
}

export interface EventUpsert extends Partial<EventID>, Partial<EventFields> {}

export const EventImageType = {
  LANDING_BANNER: { value: 0, label: "landing_banner", width: 1920, height: 1080 }, // LANDING PAGE BANNER FULL HD 1920x1080
  DETAIL_BANNER: { value: 1, label: "detail_banner", width: 1920, height: 1080 }, // DETAIL PAGE BANNER IMAGE 1920 x 600
  CARD_PORTRAIT: { value: 2, label: "card_portrait", width: 400, height: 400 }, // CARD_PORTRAIT 500x500
  CARD_LANDSCAPE: { value: 3, label: "card_landscape", width: 1200, height: 400 }, // 
  CARD_TALL: { value: 4, label: "cart_tall", width: 400, height: 1200 }, // All tickets have been sold
  TICKET_TALL: { value: 5, label: "ticket_tall", width: 400, height: 1200 }, // Event date is near (e.g., within 7 days)
  TICKET_LANDSCAPE: { value: 6, label: "ticket_lanscape", width: 1200, height: 400 }, // Event is currently happening
  TICKET_PORTRAIT: { value: 7, label: "ticket_portrait", width: 400, height: 400 }, // Event has finished
} as const;

export const eventImageTypes = Object.values(EventImageType);
export type EventImageTypeValue =
  (typeof EventImageType)[keyof typeof EventImageType]["value"];
export type EventImageTypeLabel =
  (typeof EventImageType)[keyof typeof EventImageType]["label"];
export type EventImageTypeWidth =
  (typeof EventImageType)[keyof typeof EventImageType]["width"];
export type EventImageTypeHeight =
  (typeof EventImageType)[keyof typeof EventImageType]["height"];


