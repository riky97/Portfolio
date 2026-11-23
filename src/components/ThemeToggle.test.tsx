import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { en } from "@/i18n/en";
import { it as italian } from "@/i18n/it";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { ThemeToggle } from "./ThemeToggle";

const root = document.documentElement;

describe("ThemeToggle", () => {
  beforeEach(() => {
    // index.html ships <html class="dark">; the tests start from the same page.
    root.classList.add("dark");
  });

  it("offers the light theme while the page is dark", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button", { name: en.header.theme.toLight })).toBeInTheDocument();
  });

  it("switches the page theme and remembers it", () => {
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button", { name: en.header.theme.toLight }));
    expect(root).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(screen.getByRole("button", { name: en.header.theme.toDark })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: en.header.theme.toDark }));
    expect(root).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("starts light when the page was already light", () => {
    root.classList.remove("dark");
    render(<ThemeToggle />);

    expect(screen.getByRole("button", { name: en.header.theme.toDark })).toBeInTheDocument();
  });

  it("labels the button in the current language", () => {
    localStorage.setItem("locale", "it");
    render(
      <LocaleProvider>
        <ThemeToggle />
      </LocaleProvider>,
    );

    expect(screen.getByRole("button", { name: italian.header.theme.toLight })).toBeInTheDocument();
  });
});
