import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full flex items-center justify-center border border-primary/30 bg-background/60 backdrop-blur-md hover:border-primary/70 hover:bg-primary/10 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-primary group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
