export interface SettingsDefinitionID {
  id: string;
}
export interface SettingsDefinitionFields {
  label: string; // Mongo Secret Key
  type: string; // text
  category: string; // which tab or group this belongs to? payment, general, etc
  default_value: string; // default value
  options: any; // null or json
  group: string; // which group is this?
}

export interface SettingsDefinition
  extends SettingsDefinitionID,
    SettingsDefinitionFields {
  created_at?: number;
  updated_at?: number;
}

export interface SettingsDefinitionUpsert
  extends Partial<SettingsDefinitionID>,
    Partial<SettingsDefinitionFields> {}
