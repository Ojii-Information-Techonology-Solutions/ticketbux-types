import type { CurrencyValue } from "./currency";
import type { Event } from "./event";
import type { Package } from "./package";
import type { Section } from "./section";

export const TicketStatus = {
  UNAVAILABLE: { value: 0, label: "unavailable", color: "gray" },
  RESERVED: { value: 1, label: "reserved", color: "yellow" }, // In cart / locked
  AVAILABLE: { value: 2, label: "available", color: "green" },
  LOCKED: { value: 3, label: "locked", color: "red" }, // Admin lock / Unavailable
  PAYING: { value: 4, label: "paying", color: "blue" }, // Checkout initiated
  PAID: { value: 5, label: "paid", color: "emerald" },
  REFUNDED: { value: 6, label: "refunded", color: "purple" }, // only if paid
  USED: { value: 7, label: "used", color: "zinc" }, // Scanned/entered
} as const;

export const ticketStatuses = Object.values(TicketStatus);
export type TicketStatusValue =
  (typeof TicketStatus)[keyof typeof TicketStatus]["value"];
export type TicketStatusLabel =
  (typeof TicketStatus)[keyof typeof TicketStatus]["label"];

export interface TicketID {
  id: string;
}

export interface TicketFields {
  entity_id: string;
  event_id: string;
  section_id: string;
  package_id: string;
  expires_at: number;
  currency: CurrencyValue;
  price: number;
  row: string;
  seat: string;
  status: TicketStatusValue;
  payment_id: string;
  user_id: string;
  qr_code: string;
}

export interface TicketUpsert
  extends Partial<TicketID>,
  Partial<TicketFields> { }

export interface Ticket extends TicketID, TicketFields {
  event?: Event;
  package?: Package;
  section?: Section;
  created_at?: number;
  updated_at?: number;
  deleted_at?: string | null;
}

export interface ReservedCanvasTicket
  extends TicketID,
  Pick<TicketFields, "row" | "seat" | "status" | "price" | "currency"> { }
