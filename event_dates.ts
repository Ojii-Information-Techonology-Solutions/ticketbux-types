import type { Entity } from "./entities";
import type { Event } from "./events";
import type { Venue } from "./venues";
import type { VenueTemplate } from "./venue_templates";
import type { Package } from "./packages";
import type { Section } from "./sections";
import type { Ticket } from "./tickets";
import type { SaleDate } from "./sale_dates";

export const TaxationType = {
  TAX_EXCLUSIVE: { value: 0, label: "Exclusive" },
  TAX_INCLUSIVE: { value: 1, label: "Inclusive" },
} as const;

export const taxationTypes = Object.values(TaxationType);
export type TaxationTypeValue = (typeof TaxationType)[keyof typeof TaxationType]["value"];
export type TaxationTypeLabel = (typeof TaxationType)[keyof typeof TaxationType]["label"];

export const FeePayerType = {
  BUYER: { value: 0, label: "Buyer" },
  ORGANIZER: { value: 1, label: "Organizer" },
  SPLIT: { value: 2, label: "Split" },
} as const;

export const feePayerTypes = Object.values(FeePayerType);
export type FeePayerTypeValue = (typeof FeePayerType)[keyof typeof FeePayerType]["value"];
export type FeePayerTypeLabel = (typeof FeePayerType)[keyof typeof FeePayerType]["label"];

export const PaymentEnvironment = {
  SANDBOX: { value: 0, label: "Sandbox" },
  LIVE: { value: 1, label: "Live" },
} as const;

export const paymentEnvironments = Object.values(PaymentEnvironment);
export type PaymentEnvironmentValue = (typeof PaymentEnvironment)[keyof typeof PaymentEnvironment]["value"];
export type PaymentEnvironmentLabel = (typeof PaymentEnvironment)[keyof typeof PaymentEnvironment]["label"];

export const EventDateStatus = {
  DRAFT: { value: 0, label: "draft", color: "gray" },
  PUBLISHED: { value: 1, label: "published", color: "blue" },
  OPEN: { value: 2, label: "open", color: "green" },
  CLOSED: { value: 3, label: "closed", color: "red" },
  COMPLETED: { value: 4, label: "completed", color: "purple" },
} as const;

export const eventDateStatuses = Object.values(EventDateStatus);
export type EventDateStatusValue = (typeof EventDateStatus)[keyof typeof EventDateStatus]["value"];
export type EventDateStatusLabel = (typeof EventDateStatus)[keyof typeof EventDateStatus]["label"];

export interface EventDateID {
  id: string;
}

export interface EventDateFields {
  entityId: string;
  eventId: string;
  venueId: string;
  sourceTemplateId: string | null;
  layoutData: any | null;
  startsAt: Date;
  currency: string;
  mapBackgroundUrl: string | null;
  maxTicketsPerUser: number | null;
  buyerLimit: number | null;
  configMapTimerSec: number | null;
  configPaymentTimerSec: number | null;
  taxation: TaxationTypeValue;
  taxRate: number | null;
  serviceFeePayer: FeePayerTypeValue;
  paymentProviderProcessingFeePayer: FeePayerTypeValue;
  paymentEnvironmentMode: PaymentEnvironmentValue;
  status: EventDateStatusValue;
  publishedAt: Date | null;
  bouncerUrl: string | null;
}

export interface EventDateUpsert extends Partial<EventDateID>, Partial<EventDateFields> { }

export interface EventDate extends EventDateID, EventDateFields {
  entity?: Entity;
  event?: Event;
  venue?: Venue;
  sourceTemplate?: VenueTemplate;
  packages?: Package[];
  sections?: Section[];
  tickets?: Ticket[];
  saleDates?: SaleDate[];
}
