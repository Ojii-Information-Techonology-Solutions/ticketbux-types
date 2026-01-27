export interface EmailVerification {
  token: string;
  userId: number;
  expiresAt: Date;
  createdAt: Date | null;
}
