export interface Venue {
  id: number;
  entityId: number;
  name: string;
  address: string | null;
  timezone: string | null;
  lat: string | null;
  lng: string | null;
}
