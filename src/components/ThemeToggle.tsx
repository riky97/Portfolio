import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/i18n/locale-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { toLight, toDark } = useLocale().messages.header.theme;
  const isDark = theme === "dark";

  // The icon shows where the click leads: the sun in dark mode, the moon in light.
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="text-muted-foreground pointer-coarse:size-11"
      aria-label={isDark ? toLight : toDark}
      onClick={toggleTheme}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}
