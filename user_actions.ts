
export const UserActionType = {
  ENTER_WAITING_ROOM: { value: 1, label: "Enter Waiting Room" },
  ENTER_BUY_ROOM: { value: 2, label: "Enter Buy Room" },
  ENTER_CHECKOUT_ROOM: { value: 3, label: "Enter Checkout Room" },
  ADD_TO_CART: { value: 4, label: "Add to Cart" },
  CONFIRM_AND_PAY: { value: 5, label: "Confirm and Pay" },
  PAY_NOW: { value: 6, label: "Pay Now" },
  THIRD_PARTY_WINDOW_OPEN: { value: 7, label: "3rd Party Window Open" },
  TIMED_OUT: { value: 8, label: "Timed Out" },
  PAYMENT_SUCCESS: { value: 9, label: "Payment Success" },
  REDIRECT: { value: 10, label: "Redirect Success" },
  WEBHOOK_CALL: { value: 11, label: "Webhook Call" },
} as const;

export const userActionTypes = Object.values(UserActionType);
export type UserActionTypeValue = (typeof UserActionType)[keyof typeof UserActionType]["value"];
export type UserActionTypeLabel = (typeof UserActionType)[keyof typeof UserActionType]["label"];

export const UserActionResourceType = {
  TICKET: { value: 1, label: "Ticket" },
  ORDER: { value: 2, label: "Order" },
  PAYMENT: { value: 3, label: "Payment" },
} as const;

export const userActionResourceTypes = Object.values(UserActionResourceType);
export type UserActionResourceTypeValue = (typeof UserActionResourceType)[keyof typeof UserActionResourceType]["value"];
export type UserActionResourceTypeLabel = (typeof UserActionResourceType)[keyof typeof UserActionResourceType]["label"];

export interface UserActionID {
  id: string;
}

export interface UserActionFields {
  userId: string;
  eventDateId: string;
  actionId: UserActionTypeValue;
  resourceId: string | null;
  resourceTypeId: UserActionResourceTypeValue;
  createdAt: Date;
}

export interface UserAction extends UserActionID, UserActionFields { }
