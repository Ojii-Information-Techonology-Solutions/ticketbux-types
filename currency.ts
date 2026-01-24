export const Currency = {
  USD: { value: "USD", label: "US Dollar" },
  PHP: { value: "PHP", label: "Philippine Peso" },
  SGD: { value: "SGD", label: "Singaporean Dollar" },
  EUR: { value: "EUR", label: "Euro" },
} as const;
export const currencies = Object.values(Currency);
export type CurrencyValue = (typeof Currency)[keyof typeof Currency]["value"];
export type CurrencyLabel = (typeof Currency)[keyof typeof Currency]["label"];
