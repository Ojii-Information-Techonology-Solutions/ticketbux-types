export const OrderStatus = {
  CART: { value: 0, label: "cart", color: "gray" }, // User is selecting seats
  PAYING: { value: 1, label: "paying", color: "blue" }, // User initiated checkout
  PAID: { value: 2, label: "paid", color: "green" }, // Payment confirmed
  EXPIRED: { value: 3, label: "expired", color: "yellow" }, // Cart/payment expired
  CANCELLED: { value: 4, label: "cancelled", color: "red" }, // User or system cancelled
  REFUNDED: { value: 5, label: "refunded", color: "purple" }, // Order was refunded
} as const;

export const orderStatuses = Object.values(OrderStatus);
export type OrderStatusValue =
  (typeof OrderStatus)[keyof typeof OrderStatus]["value"];
export type OrderStatusLabel =
  (typeof OrderStatus)[keyof typeof OrderStatus]["label"];

export interface Order {
  id: string;
  entity_id: string;
  event_date_id: string;
  user_id: string;
  subtotal: number;
  service_fees: number;
  total_amount: number;
  currency: string;
  status: OrderStatusValue;
  expires_at?: string;
  checkout_url?: string;
  payment_provider?: string;
  provider_reference?: string;
  created_at?: string;
}
