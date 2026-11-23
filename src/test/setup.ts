import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Vitest globals are off, so RTL's automatic cleanup does not run on its own.
// Stored preferences, the document language and theme must not leak between tests.
afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.lang = "";
  document.documentElement.classList.remove("dark");
});

// jsdom has neither of these browser APIs; the animation code relies on both.
vi.stubGlobal(
  "matchMedia",
  (query: string) =>
    ({
      matches: false,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
    }) as unknown as MediaQueryList,
);

vi.stubGlobal(
  "IntersectionObserver",
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
);
