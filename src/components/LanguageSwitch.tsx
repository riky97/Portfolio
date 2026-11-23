import { useLocale } from "@/i18n/locale-context";
import { locales } from "@/i18n/types";
import "./LanguageSwitch.css";

export function LanguageSwitch() {
  const { locale, setLocale, messages } = useLocale();

  return (
    <div className="language-switch" role="group" aria-label={messages.header.language}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className="language-switch__option"
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
