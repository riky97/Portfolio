import { createContext, useContext } from "react";
import { en, type Messages } from "./en";
import { defaultLocale, type Locale } from "./types";

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
}

// The default value is the English site, so a component renders fine on its own
// (in a test, say) without a provider around it.
export const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
  messages: en,
});

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
