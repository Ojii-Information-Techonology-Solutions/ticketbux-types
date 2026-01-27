import type { EntityUser } from "./entity_users";
import type { Role } from "./roles";
import type { Venue } from "./venues";
import type { Event } from "./events";
import type { EntitySetting } from "./entity_settings";
import type { EntityPaymentMethod } from "./entity_payment_methods";

export interface EntityID {
  id: string; // Changed to string
}

export interface EntityFields {
  name: string;
  slug: string;
  logoUrl: string | null;
  createdAt: Date | null;
}

export interface EntityUpsert extends Partial<EntityID>, Partial<EntityFields> { }

export interface Entity extends EntityID, EntityFields {
  users?: EntityUser[];
  roles?: Role[];
  venues?: Venue[];
  events?: Event[];
  settings?: EntitySetting[];
  paymentMethods?: EntityPaymentMethod[];
}
