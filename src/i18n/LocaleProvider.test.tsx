import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Footer } from "@/components/Footer";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { en } from "./en";
import { it as italian } from "./it";
import { LocaleProvider } from "./LocaleProvider";

function renderSite() {
  render(
    <LocaleProvider>
      <LanguageSwitch />
      <Footer />
    </LocaleProvider>,
  );
}

describe("LocaleProvider", () => {
  beforeEach(() => {
    document.head.innerHTML = '<meta name="description" content="" />';
  });

  it("starts in English", () => {
    renderSite();

    expect(screen.getByRole("link", { name: en.footer.backToTop })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "IT" })).toHaveAttribute("aria-pressed", "false");
  });

  it("switches the copy, the document language and the meta description", () => {
    renderSite();

    fireEvent.click(screen.getByRole("button", { name: "IT" }));

    expect(screen.getByRole("link", { name: italian.footer.backToTop })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: en.footer.backToTop })).not.toBeInTheDocument();
    expect(document.documentElement.lang).toBe("it");
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      italian.meta.description,
    );
    expect(screen.getByRole("button", { name: "IT" })).toHaveAttribute("aria-pressed", "true");
  });

  it("remembers the choice for the next visit", () => {
    renderSite();
    fireEvent.click(screen.getByRole("button", { name: "IT" }));
    expect(localStorage.getItem("locale")).toBe("it");

    document.body.innerHTML = "";
    renderSite();

    expect(screen.getByRole("link", { name: italian.footer.backToTop })).toBeInTheDocument();
  });

  it("ignores a stored value it does not know", () => {
    localStorage.setItem("locale", "fr");
    renderSite();

    expect(screen.getByRole("link", { name: en.footer.backToTop })).toBeInTheDocument();
  });
});
