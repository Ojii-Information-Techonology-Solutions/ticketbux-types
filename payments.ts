import type { Entity } from "./entities";
import type { Order } from "./orders";
import type { User } from "./users";

export const PaymentStatus = {
  PENDING: { value: 0, label: "pending", code: "pending", color: "yellow" },
  PAID: { value: 1, label: "paid", code: "paid", color: "green" },
  FAILED: { value: 2, label: "failed", code: "failed", color: "red" },
  EXPIRED: { value: 3, label: "expired", code: "expired", color: "gray" },
  REFUNDED: { value: 4, label: "refunded", code: "refunded", color: "purple" },
} as const;

export const paymentStatuses = Object.values(PaymentStatus);
export type PaymentStatusValue = (typeof PaymentStatus)[keyof typeof PaymentStatus]["value"];
export type PaymentStatusLabel = (typeof PaymentStatus)[keyof typeof PaymentStatus]["label"];
export type PaymentStatusCode = (typeof PaymentStatus)[keyof typeof PaymentStatus]["code"];

export interface PaymentID {
  id: string;
}

export interface PaymentFields {
  entityId: string;
  orderId: string;
  userId: string | null;
  amount: number;
  currency: string | null;
  provider: string;
  method: string | null;
  externalId: string | null;
  status: PaymentStatusValue;
  processingFee: number | null;
  netAmount: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

export interface PaymentUpsert extends Partial<PaymentID>, Partial<PaymentFields> { }

export interface Payment extends PaymentID, PaymentFields {
  entity?: Entity;
  order?: Order;
  user?: User;
}
