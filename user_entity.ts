import type { User } from "./user";

export interface UserEntityID {
  user_id: string;
  entity_id: string;
}

export interface UserEntityFields {
  landing_page: string;
  role: string;
  status: string;
}

export interface UserEntity extends UserEntityID, UserEntityFields {
  user?: User;
}
