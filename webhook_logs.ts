export interface WebhookLog {
  id: number;
  provider: string;
  eventType: string | null;
  orderId: number | null;
  status: string;
  webhookPayload: any;
  headers: any | null;
  signature: string | null;
  ipAddress: string | null;
  processedAt: Date | null;
  errorMessage: string | null;
  createdAt: Date | null;
}
