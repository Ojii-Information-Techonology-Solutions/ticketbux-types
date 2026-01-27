import type { EntityUser } from "./entity_users";
import type { Session } from "./sessions";
import type { Order } from "./orders";

export interface UserID {
  id: string; // Changed to string
}

export interface UserFields {
  email: string;
  passwordHash: string;
  name: string;
  phone: string | null;
  createdAt: Date | null;
  emailVerifiedAt: Date | null;
}

export interface UserUpsert extends Partial<UserID>, Partial<UserFields> { }

export interface User extends UserID, UserFields {
  entityUsers?: EntityUser[];
  sessions?: Session[];
  orders?: Order[];
}
