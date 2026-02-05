import type { Entity } from "./entities";
import type { Order } from "./orders";
import type { Ticket } from "./tickets";

// Status is denormalized from the parent Order
export const OrderItemStatus = {
  CART: { value: 0, label: "cart", color: "gray" },
  PAYING: { value: 1, label: "paying", color: "blue" },
  PAID: { value: 2, label: "paid", color: "green" },
  EXPIRED: { value: 3, label: "expired", color: "red" },
  CANCELLED: { value: 4, label: "cancelled", color: "orange" },
  REFUNDED: { value: 5, label: "refunded", color: "purple" },
} as const;

export const orderItemStatuses = Object.values(OrderItemStatus);
export type OrderItemStatusValue = (typeof OrderItemStatus)[keyof typeof OrderItemStatus]["value"];
export type OrderItemStatusLabel = (typeof OrderItemStatus)[keyof typeof OrderItemStatus]["label"];

export interface OrderItemID {
  id: string;
}

export interface OrderItemFields {
  orderId: string;
  ticketId: string;
  priceAtPurchase: number;
  sectionName: string | null;
  seatInfo: string | null;
  createdAt: Date | null;
}

export interface OrderItemUpsert extends Partial<OrderItemID>, Partial<OrderItemFields> { }

export interface OrderItem extends OrderItemID, OrderItemFields {
  order?: Order;
  ticket?: Ticket;
}
