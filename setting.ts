export interface SettingFields {
  entity_id: string;
  settings_definition_id: string;
  value: string;
}

export interface Setting extends SettingFields {
  created_at?: number;
  updated_at?: number;
}

export interface SettingUpsert extends Partial<SettingFields> { }

export const ServiceFeePayer = {
  BUYER: { value: 0, label: "buyer", color: "blue" },
  ORGANIZER: { value: 1, label: "organizer", color: "purple" },
  SPLIT: { value: 2, label: "split", color: "orange" },
} as const;

export const serviceFeePayers = Object.values(ServiceFeePayer);
export type ServiceFeePayerValue = (typeof ServiceFeePayer)[keyof typeof ServiceFeePayer]["value"];
