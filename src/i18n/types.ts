export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** A piece of content written once per language. */
export type Localized<T> = Record<Locale, T>;

/** The same value in every language: names, technologies, URLs. */
export function both<T>(value: T): Localized<T> {
  return { en: value, it: value };
}
