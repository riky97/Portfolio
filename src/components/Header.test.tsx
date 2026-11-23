import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { en } from "@/i18n/en";
import { Header } from "./Header";

describe("Header", () => {
  it("shows the desktop navigation with a link per section", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("opens and closes the mobile menu with the toggle button", () => {
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Toggle navigation menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.getAllByRole("navigation", { name: "Primary" })).toHaveLength(1);

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("navigation", { name: "Primary" })).toHaveLength(2);

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.getAllByRole("navigation", { name: "Primary" })).toHaveLength(1);
  });

  it("points the menu button at the menu it opens", () => {
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Toggle navigation menu" });
    fireEvent.click(toggle);

    const menuId = toggle.getAttribute("aria-controls");
    expect(menuId).toBeTruthy();
    expect(document.getElementById(menuId!)).toBeInTheDocument();
  });

  it("puts the language and theme controls in the mobile menu too, in step with the header", () => {
    document.documentElement.classList.add("dark");
    render(<Header />);
    expect(screen.getAllByRole("button", { name: "EN" })).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Toggle navigation menu" }));
    expect(screen.getAllByRole("button", { name: "EN" })).toHaveLength(2);
    const themeToggles = screen.getAllByRole("button", { name: en.header.theme.toLight });
    expect(themeToggles).toHaveLength(2);

    // Using the one in the menu updates the one in the header row as well.
    fireEvent.click(themeToggles[1]);
    expect(screen.getAllByRole("button", { name: en.header.theme.toDark })).toHaveLength(2);
  });
});
