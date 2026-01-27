export interface EntityPaymentMethod {
  id: number;
  entityId: number;
  providerKey: string;
  isEnabled: boolean | null;
  isSandbox: boolean | null;
  enabledMethods: { sandbox: string[], live: string[] } | null;
  feePercent: number | null;
  feeFixed: number | null;
  credentialsEncrypted: string | null;
  createdAt: Date | null;
}
