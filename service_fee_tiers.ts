export interface ServiceFeeTier {
  id: number;
  minAmount: number;
  maxAmount: number | null;
  serviceFee: number;
}
