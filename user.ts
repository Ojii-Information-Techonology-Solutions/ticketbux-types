import type { UserVerificationValue } from "./auth";

export interface UserID {
  id: string;
}

export interface UserFields {
  email: string;
  password?: string;
  first_name?: string | null;
  last_name?: string | null;
  full_name: string;
  verified?: UserVerificationValue;
  verification_token?: string | null;
  verified_at?: string | null;
  default_entity_id?: string | null;
}

export interface User extends UserID, UserFields {
  created_at?: number;
  updated_at?: number;
  deleted_at?: number | null;
}

export interface UserUpsert extends Partial<UserID>, Partial<UserFields> {}
