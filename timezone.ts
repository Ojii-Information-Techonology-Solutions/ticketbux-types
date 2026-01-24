export const tz = Intl.supportedValuesOf
  ? (Intl.supportedValuesOf("timeZone") as readonly string[])
  : ([
      "Pacific/Midway",
      "America/New_York",
      "Europe/London",
      "Asia/Manila",
      "Asia/Tokyo",
      "Australia/Sydney",
    ] as const);

export type Timezones = (typeof tz)[number]; // Extracts valid timezone values
