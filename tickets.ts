import type { EventDate } from "./event_dates";
import type { Section } from "./sections";
import type { Order } from "./orders";
import type { User } from "./users";
import type { Entity } from "./entities";
import type { CurrencyValue } from "./currency";

export const TicketStatus = {
  UNAVAILABLE: { value: 0, label: "unavailable", color: "gray" },
  AVAILABLE: { value: 1, label: "available", color: "green" },
  RESERVED: { value: 2, label: "reserved", color: "yellow" }, // In cart / locked
  PAYING: { value: 3, label: "paying", color: "blue" }, // Checkout initiated
  SOLD: { value: 4, label: "sold", color: "emerald" }, // paid and sold
  REFUNDED: { value: 5, label: "refunded", color: "purple" }, // only if paid
  HOLD: { value: 6, label: "hold", color: "red" }, // held by admin, maybe for refund, reselling etc.
  USED: { value: 7, label: "used", color: "zinc" }, // Scanned/entered
} as const;

export const ticketStatuses = Object.values(TicketStatus);
export type TicketStatusValue = (typeof TicketStatus)[keyof typeof TicketStatus]["value"];
export type TicketStatusLabel = (typeof TicketStatus)[keyof typeof TicketStatus]["label"];
export type TicketStatusColor = (typeof TicketStatus)[keyof typeof TicketStatus]["color"];

export const TicketChannel = {
  ONLINE: { value: 0, label: "Online" },
  POS: { value: 1, label: "POS" },
  ADMIN: { value: 2, label: "Admin" },
} as const;

export const ticketChannels = Object.values(TicketChannel);
export type TicketChannelValue = (typeof TicketChannel)[keyof typeof TicketChannel]["value"];
export type TicketChannelLabel = (typeof TicketChannel)[keyof typeof TicketChannel]["label"];

export interface TicketID {
  id: string; // Changed to string for frontend safety
}

export interface TicketFields {
  entityId: string; // CamelCase to match Drizzle Schema
  ticketCode: string;
  eventDateId: string;
  sectionId: string;
  row: string | null;
  name: string | null;
  sort: number | null;
  x: number | null;
  y: number | null;
  channel: TicketChannelValue;
  status: TicketStatusValue;
  orderId: string | null;
  userId: string | null;
  price: number;
  barcodeHash: string | null;
}

export interface TicketUpsert extends Partial<TicketID>, Partial<TicketFields> { }

export interface Ticket extends TicketID, TicketFields {
  entity?: Entity;
  eventDate?: EventDate;
  section?: Section;
  order?: Order;
  user?: User;
}
