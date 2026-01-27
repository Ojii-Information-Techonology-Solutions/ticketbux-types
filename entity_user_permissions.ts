export interface EntityUserPermission {
  id: number;
  entityUserId: number;
  permissionSlug: string;
  isGranted: boolean;
}
