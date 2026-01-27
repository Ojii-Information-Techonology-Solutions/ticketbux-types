import type { Entity } from "./entities";
import type { EventDate } from "./event_dates";
import type { Package } from "./packages";
import type { Ticket } from "./tickets";

export const SectionType = {
  FREE: { value: 0, label: "free", color: "gray" },
  OPEN: { value: 1, label: "open", color: "blue" },
  RESERVED: { value: 2, label: "reserved", color: "green" },
} as const;

export const sectionTypes = Object.values(SectionType);
export type SectionTypeValue = (typeof SectionType)[keyof typeof SectionType]["value"];
export type SectionTypeLabel = (typeof SectionType)[keyof typeof SectionType]["label"];

export interface SectionID {
  id: string;
}

export interface SectionFields {
  entityId: string;
  eventDateId: string;
  name: string;
  sectionType: SectionTypeValue;
  totalCapacity: number;
  polygonPoints: any | null;
  packageId: string | null;
}

export interface SectionUpsert extends Partial<SectionID>, Partial<SectionFields> { }

export interface Section extends SectionID, SectionFields {
  entity?: Entity;
  eventDate?: EventDate;
  package?: Package;
  tickets?: Ticket[];
}
