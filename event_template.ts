export interface EventTemplateID {
  event_id: string;
}

export interface EventTemplateFields {
  canvas: string;
}

export interface EventTemplateUpsert
  extends Required<EventTemplateID>,
    Required<EventTemplateFields> {}

export interface EventTemplate extends EventTemplateID, EventTemplateFields {
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
