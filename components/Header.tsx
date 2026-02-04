"use client";

import { ExternalLink } from "lucide-react";
import { useThemeStore } from "@/stores/themeStore";
import { ThemeToggle } from "./ThemeToggle";

const NECA_ORG_CHART_URL = "/documents/OrgChart_Main_02-03-26.pdf";
const IBEW_ORG_CHART_URL = "https://ibew.org/IBEW/"; // Placeholder - update with actual IBEW org chart URL

export function Header() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  const handleOrgChartClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 lg:px-6 py-3">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Logo and Theme Toggle - Centered */}
        <div className="flex items-center justify-center gap-4 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rosendin-logo.png"
            alt="Rosendin"
            className={`h-8 w-auto object-contain ${isDark ? "brightness-0 invert" : ""}`}
          />
          <ThemeToggle />
        </div>
        {/* Org Chart Buttons - Centered */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handleOrgChartClick(NECA_ORG_CHART_URL)}
            className={`group flex items-center gap-1.5 px-3 py-2 rounded-full font-medium text-xs transition-all shadow-md ${isDark
              ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
              : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
            }`}
          >
            <span>NECA Org Chart</span>
            <ExternalLink className="w-3 h-3 opacity-50" />
          </button>
          <button
            onClick={() => handleOrgChartClick(IBEW_ORG_CHART_URL)}
            className={`group flex items-center gap-1.5 px-3 py-2 rounded-full font-medium text-xs transition-all shadow-md ${isDark
              ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
              : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
            }`}
          >
            <span>IBEW Org Chart</span>
            <ExternalLink className="w-3 h-3 opacity-50" />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Org Chart Links */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleOrgChartClick(NECA_ORG_CHART_URL)}
            className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg ${isDark
              ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
              : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
            }`}
          >
            <span>NECA Org Chart</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => handleOrgChartClick(IBEW_ORG_CHART_URL)}
            className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg ${isDark
              ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
              : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
            }`}
          >
            <span>IBEW Org Chart</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Logo and Theme Toggle - Desktop */}
        <div className="flex items-center gap-4 mr-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rosendin-logo.png"
            alt="Rosendin"
            className={`h-10 w-auto object-contain ${isDark ? "brightness-0 invert" : ""}`}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
