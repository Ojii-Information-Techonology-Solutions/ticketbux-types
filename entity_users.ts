export interface EntityUser {
  id: number;
  userId: number;
  entityId: number;
  roleId: number;
  addedByUserId: number | null;
  createdAt: Date | null;
}
