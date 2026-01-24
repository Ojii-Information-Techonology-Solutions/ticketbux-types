export const SeatType = {
  RESERVED_SEATING: { value: 0, label: "reserved seating" },
  OPEN_SEATING: { value: 1, label: "open seating" },
  FREE_STANDING: { value: 2, label: "free standing" },
} as const;
export const seatTypes = Object.values(SeatType);
export type SeatTypeValue = (typeof SeatType)[keyof typeof SeatType]["value"];
export type SeatTypeLabel = (typeof SeatType)[keyof typeof SeatType]["label"];

export interface SectionID {
  id: string;
}

export interface SectionFields {
  entity_id: string;
  event_id: string;
  package_id: string;
  type: SeatTypeValue;
  code: string;
  points: string;
}

export interface Section extends SectionID, SectionFields {}

export interface SectionUpsert
  extends Partial<SectionID>,
    Partial<SectionFields> {}
