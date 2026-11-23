import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLocale } from "@/i18n/locale-context";
import { contact } from "../data/cv";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import "./Header.css";

const sections = ["about", "skills", "experience", "projects", "contact"] as const;

// Where the desktop row replaces the menu button (keep in step with Header.css).
const DESKTOP_QUERY = "(min-width: 901px)";

export function Header() {
  const { messages } = useLocale();
  const { nav, primaryNav, openMenu, closeMenu, menuTitle } = messages.header;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A sidebar left open while the window grows to desktop width would hide a
  // page that no longer needs it.
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
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

        {/* On phones and tablets the links and controls live in a sidebar that
            slides in from the right. */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button type="button" className="header__menu-toggle" aria-label={openMenu}>
              <span />
              <span />
              <span />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-background"
            closeLabel={closeMenu}
            aria-describedby={undefined}
            onOpenAutoFocus={(event) => {
              // Land on the sidebar itself, not on the first control (the language
              // toggle), so opening it does not light up a button. Tab then moves
              // to the first link.
              event.preventDefault();
              (event.currentTarget as HTMLElement | null)?.focus();
            }}
          >
            <SheetHeader>
              <SheetTitle>{menuTitle}</SheetTitle>
              <SheetDescription className="sr-only">{primaryNav}</SheetDescription>
            </SheetHeader>

            <nav className="header__nav--mobile" aria-label={primaryNav}>
              {sections.map((id) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                  {nav[id]}
                </a>
              ))}
            </nav>

            <SheetFooter>
              <div className="header__panel-controls">
                <LanguageSwitch />
                <ThemeToggle />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
