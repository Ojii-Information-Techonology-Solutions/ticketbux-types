import type { Entity } from "./entities";
import type { EventDate } from "./event_dates";
import type { PackageItem } from "./package_items";
import type { Section } from "./sections";

export interface PackageID {
  id: string;
}

export interface PackageFields {
  entityId: string;
  eventDateId: string;
  name: string;
  price: number;
  colorCode: string;
  maxPerOrder: number | null;
}

export interface PackageUpsert extends Partial<PackageID>, Partial<PackageFields> { }

export interface Package extends PackageID, PackageFields {
  entity?: Entity;
  eventDate?: EventDate;
  items?: PackageItem[];
  sections?: Section[];
}
