import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { readStored, writeStored } from "@/lib/storage";
import { en, type Messages } from "./en";
import { it } from "./it";
import { LocaleContext } from "./locale-context";
import { defaultLocale, locales, type Locale } from "./types";

const STORAGE_KEY = "locale";

const messagesByLocale: Record<Locale, Messages> = { en, it };

function readInitialLocale(): Locale {
  const stored = readStored(STORAGE_KEY);
  return locales.find((locale) => locale === stored) ?? defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);
  const messages = messagesByLocale[locale];

  // Only an explicit choice is stored, so the default can still change later.
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeStored(STORAGE_KEY, next);
  }, []);

  // Keep the parts of the document outside React in step with the language.
  useEffect(() => {
    document.documentElement.lang = locale;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", messages.meta.description);
  }, [locale, messages]);

  const value = useMemo(() => ({ locale, setLocale, messages }), [locale, setLocale, messages]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
