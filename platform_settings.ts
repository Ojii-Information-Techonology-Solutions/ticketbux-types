export interface PlatformSettings {
  id: string; // BigInt serialized as string
  taxRate: number; // 1200 = 12%
  nextInvoiceNumber: number;
  nextBillNumber: number;
  defaultBouncerUrl: string;
  defaultInternalBouncerUrl: string;
}

export interface PlatformSettingsUpdate {
  taxRate?: number;
  nextInvoiceNumber?: number;
  nextBillNumber?: number;
  defaultBouncerUrl?: string;
  defaultInternalBouncerUrl?: string;
}
