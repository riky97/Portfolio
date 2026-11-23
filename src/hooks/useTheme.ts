import { useCallback, useSyncExternalStore } from "react";
import { writeStored } from "@/lib/storage";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

// The `dark` class on <html> is the source of truth. The inline script in
// index.html sets it before the first paint (dark unless "light" was saved).
function readTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Only toggleTheme changes the class, so it can notify subscribers directly.
// That keeps every toggle on the page in step (the header and the mobile menu
// each render one).
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme);

  const toggleTheme = useCallback(() => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    writeStored(STORAGE_KEY, next);
    listeners.forEach((listener) => listener());
  }, []);

  return { theme, toggleTheme };
}
