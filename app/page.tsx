"use client";

import { USMap } from "@/components/Map/USMap";
import { DesktopSidebar } from "@/components/Sidebar/DesktopSidebar";
import { MobileSidebar } from "@/components/Sidebar/MobileSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Header } from "@/components/Header";
import { useThemeStore } from "@/stores/themeStore";
import { useMapStore } from "@/stores/mapStore";

export default function HomePage() {
  const { theme } = useThemeStore();
  const { selectedState } = useMapStore();
  const isDark = theme === "dark";
  const hasSidebar = !!selectedState;

  return (
    <div className={`min-h-screen ${
      isDark
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : "bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50"
    }`}>
      {/* Header with Logo and Org Chart Links */}
      <Header />

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Main Content Area */}
      <main className={`pt-14 min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${
        hasSidebar ? "lg:pl-72" : ""
      }`}>
        <USMap />
      </main>

      {/* Mobile Sidebar */}
      <MobileSidebar />
    </div>
  );
}
