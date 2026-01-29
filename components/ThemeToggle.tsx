"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/themeStore";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all ${
        isDark
          ? "bg-gray-700 hover:bg-gray-600 text-amber-400"
          : "bg-white hover:bg-gray-50 text-gray-800"
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
