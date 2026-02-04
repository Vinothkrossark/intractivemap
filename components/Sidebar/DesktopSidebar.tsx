"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useMapStore } from "@/stores/mapStore";
import { useThemeStore } from "@/stores/themeStore";
import { MAP_CONFIG, LAYER_CONFIG } from "@/data/map-config";
import type { LayerType } from "@/types";

export function DesktopSidebar() {
  const router = useRouter();
  const { selectedState, setSelectedState } = useMapStore();
  const { theme } = useThemeStore();

  const isDark = theme === "dark";

  if (!selectedState || !MAP_CONFIG[selectedState]) {
    return null; // Hidden when no state selected
  }

  const stateData = MAP_CONFIG[selectedState];

  const handleLayerClick = (layerId: LayerType) => {
    const resource = stateData.resources[layerId];

    if (!resource) {
      alert(`No ${LAYER_CONFIG[layerId].label} data available for ${stateData.name}`);
      return;
    }

    // Handle different resource types
    if (resource.type === "pdf" || resource.type === "external-link") {
      if (resource.url) {
        window.open(resource.url, "_blank", "noopener,noreferrer");
      }
    } else if (resource.type === "excel-viewer") {
      if (resource.url) {
        const params = new URLSearchParams({
          file: resource.url,
          title: resource.title || "Excel Viewer",
        });
        router.push(`/viewer/excel?${params.toString()}`);
      }
    } else if (resource.type === "placeholder") {
      alert(resource.message || "Resource coming soon");
    }
  };

  const handleClose = () => {
    setSelectedState(null);
  };

  return (
    <aside className={`hidden lg:block w-72 h-[calc(100vh-3.5rem)] fixed top-14 left-0 border-r p-5 overflow-y-auto z-30 ${
      isDark
        ? "bg-gray-800/95 border-gray-700/50"
        : "bg-white/95 border-gray-200/50"
    } backdrop-blur-sm`}>
      {/* Header with Close Button */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className={`text-xs uppercase tracking-wider font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Data Layers
          </p>
        </div>
        <button
          onClick={handleClose}
          className={`p-1.5 rounded-full transition-colors ${
            isDark ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
          aria-label="Close sidebar"
        >
          <X className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}`} />
        </button>
      </div>

      {/* Selected State Badge */}
      <div className={`mb-5 p-3 rounded-xl ${
        isDark
          ? "bg-amber-500/10 border border-amber-500/20"
          : "bg-amber-50 border border-amber-100"
      }`}>
        <p className={`text-[10px] uppercase tracking-wider mb-0.5 ${
          isDark ? "text-amber-400/80" : "text-amber-600"
        }`}>
          Selected State
        </p>
        <p className={`font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
          {stateData.name} ({selectedState})
        </p>
      </div>

      {/* Layer Options - Click to Open */}
      <div className="space-y-1.5">
        {Object.values(LAYER_CONFIG).map((layer) => {
          const resource = stateData.resources[layer.id];
          const hasResource = resource && (resource.type === "pdf" || resource.type === "external-link" || resource.type === "excel-viewer");

          return (
            <button
              key={layer.id}
              onClick={() => handleLayerClick(layer.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                hasResource
                  ? isDark
                    ? "hover:bg-gray-700/80 cursor-pointer"
                    : "hover:bg-gray-100 cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${
                hasResource
                  ? isDark ? "bg-amber-500/20" : "bg-amber-100"
                  : isDark ? "bg-gray-700" : "bg-gray-100"
              }`}>
                {hasResource ? "📄" : "🔒"}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-sm truncate ${
                  hasResource
                    ? isDark ? "text-white" : "text-gray-800"
                    : isDark ? "text-gray-500" : "text-gray-400"
                }`}>
                  {layer.label}
                </p>
                <p className={`text-[11px] ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  {resource?.type === "pdf" ? "PDF" :
                   resource?.type === "external-link" ? "Link" :
                   resource?.type === "excel-viewer" ? "Excel" :
                   "Coming Soon"}
                </p>
              </div>
              {hasResource && (
                <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>→</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className={`mt-6 pt-4 border-t ${isDark ? "border-gray-700/50" : "border-gray-200/50"}`}>
        <p className={`text-[11px] ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          Click a layer to open in new tab
        </p>
      </div>
    </aside>
  );
}
