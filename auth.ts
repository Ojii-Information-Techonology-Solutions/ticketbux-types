import type { User } from "./user";

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  session_id: string;
  user: {
    id: string;
    name: string;
    email: string;
    first_name?: string;
    last_name?: string;
    full_name: string;
    default_entity_id: string | null;
    entities: {
      id: string;
      landing_page: string;
      name: string;
      role: string;
      status: number;
    }[];
    permissions: string[];
  };
}

export interface Register {
  full_name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {}

export interface RegisterBusiness {
  business_name: string;
  full_name: string;
  email: string;
  password: string;
}

export interface RegisterBusinessResponse {}

export interface VerifyEmail {
  token: string;
}

export const UserVerification = {
  UNVERIFIED: { value: 0, label: "Unverfied" },
  VERIFIED: { value: 1, label: "verified" },
};

export const userVerifications = Object.values(UserVerification);
export type UserVerificationValue =
  (typeof UserVerification)[keyof typeof UserVerification]["value"];
export type UserVerificationLabel =
  (typeof UserVerification)[keyof typeof UserVerification]["label"];

export type LoginPayload = {
  email: string;
  password: string;
};

export type ClientLoginResponse = {
  session_id: string;
  user: User;
};

export type RegisterPayload = {
  email: string;
  password: string;
  full_name: string;
};

export type VerifyPayload = {
  token: string;
};

export type VerifyResponse = {};

export type SwitchEntityPayload = {
  entity_id: string;
};

export type SwitchEntityResponse = {
  session_id: string;
  user: User;
};

export type RegisterBusinessPayload = {
  email: string;
  password: string;
  full_name: string;
  business_name: string;
};
