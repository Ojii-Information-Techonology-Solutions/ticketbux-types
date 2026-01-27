import type { Entity } from "./entities";
import type { EventDate } from "./event_dates";
import type { User } from "./users";
import type { Payment } from "./payments";
import type { OrderItem } from "./order_items";
import type { Ticket } from "./tickets";

export const OrderStatus = {
  CART: { value: 0, label: "cart", color: "gray" },
  PAYING: { value: 1, label: "paying", color: "blue" },
  PAID: { value: 2, label: "paid", color: "green" },
  EXPIRED: { value: 3, label: "expired", color: "red" },
  CANCELLED: { value: 4, label: "cancelled", color: "orange" },
  REFUNDED: { value: 5, label: "refunded", color: "purple" },
} as const;

export const orderStatuses = Object.values(OrderStatus);
export type OrderStatusValue = (typeof OrderStatus)[keyof typeof OrderStatus]["value"];
export type OrderStatusLabel = (typeof OrderStatus)[keyof typeof OrderStatus]["label"];

export interface OrderID {
  id: string;
}

export interface OrderFields {
  entityId: string;
  eventDateId: string | null;
  userId: string | null;
  subtotal: number;
  serviceFees: number | null;
  processingFee: number | null;
  taxPaid: number | null;
  totalAmount: number;
  currency: string | null;
  status: OrderStatusValue;
  expiresAt: Date | null;
  checkoutUrl: string | null;
  paymentProvider: string | null;
  providerReference: string | null;
  lastPaymentId: string | null;
  isOfflineSale: boolean | null;
  soldByStaffId: string | null;
  createdAt: Date | null;
}

export interface OrderUpsert extends Partial<OrderID>, Partial<OrderFields> { }

export interface Order extends OrderID, OrderFields {
  entity?: Entity;
  eventDate?: EventDate;
  user?: User;
  lastPayment?: Payment;
  items?: OrderItem[];
  payments?: Payment[];
  tickets?: Ticket[];
}
