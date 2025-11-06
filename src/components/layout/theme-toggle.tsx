import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const current = theme === "system" ? resolvedTheme : theme;

  const toggleTheme = React.useCallback(() => {
    setTheme(current === "dark" ? "light" : "dark");
  }, [current, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-10 w-10"
      onClick={toggleTheme}
      aria-label="Tema değiştir"
    >
      <Sun className="absolute size-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-180 dark:scale-0" />
      <Moon className="absolute size-5 rotate-180 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
