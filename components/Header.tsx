"use client";

import { ExternalLink } from "lucide-react";
import { useThemeStore } from "@/stores/themeStore";

const NECA_ORG_CHART_URL = "/documents/OrgChart_Main_02-03-26.pdf";
const IBEW_ORG_CHART_URL = "https://ibew.org/IBEW/"; // Placeholder - update with actual IBEW org chart URL

export function Header() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  const handleOrgChartClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-3">
      <div className="flex items-center justify-between">
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

        {/* Rosendin Logo - moved more to the right */}
        <div className="flex items-center mr-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rosendin-logo.png"
            alt="Rosendin"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className={`hidden flex-col items-center ${isDark ? "text-blue-400" : "text-blue-600"}`}>
            <span className="text-3xl font-light tracking-wider" style={{ fontFamily: 'serif' }}>R</span>
            <span className="text-[10px] tracking-[0.2em] font-medium text-gray-500">ROSENDIN</span>
          </div>
        </div>
      </div>
    </header>
  );
}
