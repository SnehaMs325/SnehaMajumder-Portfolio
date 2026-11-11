
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="
        fixed top-5 right-5 z-[9999]
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-[#E53229]
        bg-[#F4F4EB] text-[#1C1C1C]
        shadow-lg
        transition-all duration-300
        hover:scale-110
        dark:bg-[#1C1C1C] dark:text-[#F4F4EB]
      "
    >
      {isDark ? <Sun size={21} /> : <Moon size={21} />}
    </button>
  );
};
