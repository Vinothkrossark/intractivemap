"use client";

import { USMap } from "@/components/Map/USMap";
import { DesktopSidebar } from "@/components/Sidebar/DesktopSidebar";
import { MobileSidebar } from "@/components/Sidebar/MobileSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useThemeStore } from "@/stores/themeStore";

export default function HomePage() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${
      isDark
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : "bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50"
    }`}>
      {/* Theme Toggle Button */}
      <ThemeToggle />

      <div className="flex flex-col lg:flex-row">
        {/* Desktop Sidebar */}
        <DesktopSidebar />

        {/* Main Content Area */}
        <main className="flex-1 flex items-center justify-center min-h-screen p-4">
          <USMap />
        </main>

        {/* Mobile Sidebar */}
        <MobileSidebar />
      </div>
    </div>
  );
}
