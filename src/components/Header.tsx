import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/locale-context";
import { contact } from "../data/cv";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import "./Header.css";

const sections = ["about", "skills", "experience", "projects", "contact"] as const;

export function Header() {
  const { messages } = useLocale();
  const { nav, primaryNav, menuToggle } = messages.header;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="site-container header__row">
        <a href="#top" className="header__brand">
          <span className="header__brand-dot" aria-hidden="true" />
          {contact.name}
        </a>

        <nav className="header__nav header__nav--desktop" aria-label={primaryNav}>
          {sections.map((id) => (
            <a key={id} href={`#${id}`}>
              {nav[id]}
            </a>
          ))}
        </nav>

        <div className="header__controls">
          <LanguageSwitch />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="header__menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={menuToggle}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="header__panel" id="mobile-menu">
          <nav className="header__nav--mobile" aria-label={primaryNav}>
            {sections.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {nav[id]}
              </a>
            ))}
          </nav>
          <div className="header__panel-controls">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
