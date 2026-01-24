import type { CurrencyValue } from "./currency";
import type { SectionFields } from "./section";
import type { TicketFields, TicketID, TicketStatusValue } from "./ticket";

export interface CartItem
  extends TicketID,
    Pick<TicketFields, "row" | "seat" | "price" | "section_id">,
    Pick<SectionFields, "code" | "type"> {
  status?: TicketStatusValue;
  currency?: CurrencyValue;
}
