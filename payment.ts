import type { CartItem } from "./cart";

export interface PaymentID {
  id: string;
}

export interface PaymentProvider {
  createCheckoutSession(
    cartItems: CartItem[],
    userID: string,
    userEmail: string,
  ): Promise<{
    checkout_url: string;
    session_id: string;
    payment_id: string;
  }>;

  getPaymentStatusFromLocalDB(paymentId: string | string[]): Promise<any>;

  verifyPayment(checkoutSessionId: string): Promise<any>;

  refund(paymentId: string, amount: number): Promise<any>;

  expireCheckoutSession(checkoutSessionId: string): Promise<any>;
}

export const PaymentStatus = {
  PENDING: { value: 0, label: "pending", color: "yellow" }, // pending on payment provider
  PROCESSING: { value: 1, label: "processing", color: "blue" }, // processing on payment provider
  PAID: { value: 2, label: "paid", color: "green" }, // paid on payment provider
  COMPLETED: { value: 3, label: "completed", color: "green" }, // finalized
  FAILED: { value: 4, label: "failed", color: "red" }, // failed on provider
  REFUNDED: { value: 5, label: "refunded", color: "purple" }, // full refund
  EXPIRED: { value: 6, label: "expired", color: "gray" }, // session expired
} as const;

export const paymentStatuses = Object.values(PaymentStatus);
export type PaymentStatusValue =
  (typeof PaymentStatus)[keyof typeof PaymentStatus]["value"];
export type PaymentStatusLabel =
  (typeof PaymentStatus)[keyof typeof PaymentStatus]["label"];
