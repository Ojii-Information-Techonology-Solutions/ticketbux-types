
import type { Entity } from "./entities";
import type { Package } from "./packages";
import type { Section } from "./sections";

export const PackageItemType = {
  TICKET: { value: 0, label: "Ticket" },
  MERCH: { value: 1, label: "Merchandise" },
  ADDON: { value: 2, label: "Add-on" },
} as const;

export const packageItemTypes = Object.values(PackageItemType);
export type PackageItemTypeValue = (typeof PackageItemType)[keyof typeof PackageItemType]["value"];
export type PackageItemTypeLabel = (typeof PackageItemType)[keyof typeof PackageItemType]["label"];

export interface PackageItemID {
  id: string;
}

export interface PackageItemFields {
  entityId: string;
  packageId: string;
  name: string;
  itemType: PackageItemTypeValue;
  qty: number | null;
}

export interface PackageItemUpsert extends Partial<PackageItemID>, Partial<PackageItemFields> { }

export interface PackageItem extends PackageItemID, PackageItemFields {
  entity?: Entity;
  package?: Package;
}
