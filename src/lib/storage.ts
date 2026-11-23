// localStorage throws in some private-browsing modes and when storage is blocked.
// Preferences are a nicety, so a failure falls back to the default silently.

export function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStored(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Nothing to do: the choice just won't survive a reload.
  }
}
