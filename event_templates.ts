export interface EventTemplate {
  id: number;
  entityId: number;
  name: string;
  defaultDescription: string | null;
  defaultCurrency: string | null;
  defaultMapTimerSec: number | null;
  defaultPaymentTimerSec: number | null;
  layoutData: any | null;
}
