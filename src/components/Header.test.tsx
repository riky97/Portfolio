import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { en } from "@/i18n/en";
import { Header } from "./Header";

const { openMenu, closeMenu, menuTitle } = en.header;

function openSidebar() {
  render(<Header />);
  fireEvent.click(screen.getByRole("button", { name: openMenu }));
  return screen.getByRole("dialog", { name: menuTitle });
}

describe("Header", () => {
  it("shows the desktop navigation with a link per section", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("keeps the sidebar closed until the menu button is pressed", () => {
    render(<Header />);

    const toggle = screen.getByRole("button", { name: openMenu });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens a sidebar with the links, labelled and wired to the menu button", () => {
    const sidebar = openSidebar();

    expect(sidebar).toHaveAttribute("data-side", "right");
    const nav = within(sidebar).getByRole("navigation", { name: "Primary" });
    expect(within(nav).getAllByRole("link")).toHaveLength(5);
    expect(within(nav).getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");

    // The page behind is hidden from assistive technology while the sidebar is open.
    const toggle = screen.getByRole("button", { name: openMenu, hidden: true });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAttribute("aria-controls", sidebar.id);
  });

  it.each([
    ["the close button", () => fireEvent.click(screen.getByRole("button", { name: closeMenu }))],
    ["Escape", () => fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" })],
    ["choosing a link", () => fireEvent.click(screen.getByRole("link", { name: "Skills" }))],
  ])("closes the sidebar with %s", async (_how, close) => {
    openSidebar();

    close();

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(screen.getByRole("button", { name: openMenu })).toHaveAttribute("aria-expanded", "false");
  });

  it("puts the language and theme controls in the sidebar, in step with the header", () => {
    document.documentElement.classList.add("dark");
    const sidebar = openSidebar();

    expect(within(sidebar).getByRole("button", { name: "EN" })).toBeInTheDocument();
    fireEvent.click(within(sidebar).getByRole("button", { name: en.header.theme.toLight }));

    // The header row's own toggle (hidden behind the open sidebar) followed along.
    expect(
      screen.getAllByRole("button", { name: en.header.theme.toDark, hidden: true }),
    ).toHaveLength(2);
  });

  it("closes the sidebar when the window grows to desktop width", async () => {
    let onChange: ((event: MediaQueryListEvent) => void) | undefined;
    const original = window.matchMedia;
    window.matchMedia = ((query: string) =>
      ({
        matches: false,
        media: query,
        addEventListener: (_type: string, listener: typeof onChange) => {
          onChange = listener;
        },
        removeEventListener: () => {},
      }) as unknown as MediaQueryList) as typeof window.matchMedia;

    try {
      openSidebar();
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      act(() => onChange?.({ matches: true } as MediaQueryListEvent));

      await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    } finally {
      window.matchMedia = original;
    }
  });
});
