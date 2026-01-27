export interface Session {
  id: string;
  userId: number;
  activeEntityId: number | null;
  expiresAt: Date;
  createdAt: Date | null;
}
