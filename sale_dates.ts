import type { Entity } from "./entities";
import type { EventDate } from "./event_dates";

export const SaleType = {
  PUBLIC: { value: 0, label: "Public" },
  PRESALE: { value: 1, label: "Presale" },
  WAITLIST: { value: 2, label: "Waitlist" },
} as const;

export const saleTypes = Object.values(SaleType);
export type SaleTypeValue = (typeof SaleType)[keyof typeof SaleType]["value"];
export type SaleTypeLabel = (typeof SaleType)[keyof typeof SaleType]["label"];

export const InventoryStrategy = {
  POOLED: { value: 0, label: "Pooled" },
  ALLOCATED: { value: 1, label: "Allocated" },
} as const;

export const inventoryStrategies = Object.values(InventoryStrategy);
export type InventoryStrategyValue = (typeof InventoryStrategy)[keyof typeof InventoryStrategy]["value"];
export type InventoryStrategyLabel = (typeof InventoryStrategy)[keyof typeof InventoryStrategy]["label"];

export interface SaleDateID {
  id: string;
}

export interface SaleDateFields {
  entityId: string;
  eventDateId: string;
  name: string;
  saleType: SaleTypeValue;
  accessCode: string | null;
  sponsor: string | null;
  inventoryStrategy: InventoryStrategyValue;
  ticketSelections: any;
  sellAll: boolean;
  activated: boolean;
  bouncerCleared: boolean;
  startsAt: Date;
  endsAt: Date;
}

export interface SaleDateUpsert extends Partial<SaleDateID>, Partial<SaleDateFields> { }

export interface SaleDate extends SaleDateID, SaleDateFields {
  entity?: Entity;
  eventDate?: EventDate;
}
