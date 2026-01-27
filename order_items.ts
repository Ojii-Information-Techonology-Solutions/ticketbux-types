import type { Entity } from "./entities";
import type { Order } from "./orders";
import type { Ticket } from "./tickets";

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
