export interface EntityID {
  id: string;
}

export interface EntityFields {
  name: string;
}

export interface Entity extends EntityID, EntityFields {}
