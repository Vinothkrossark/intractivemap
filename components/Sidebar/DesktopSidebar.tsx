"use client";

import { X } from "lucide-react";
import { useMapStore } from "@/stores/mapStore";
import { useThemeStore } from "@/stores/themeStore";
import { MAP_CONFIG, LAYER_CONFIG } from "@/data/map-config";
import type { LayerType } from "@/types";

export function DesktopSidebar() {
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
    } else if (resource.type === "placeholder") {
      alert(resource.message || "Resource coming soon");
    }
  };

  const handleClose = () => {
    setSelectedState(null);
  };

  return (
    <aside className={`hidden lg:block w-80 min-h-screen sticky top-0 border-r p-6 animate-slide-in shadow-lg ${
      isDark
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200"
    }`}>
      {/* Header with Close Button */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}>
            Data Layers
          </h2>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Click a layer to open resource
          </p>
        </div>
        <button
          onClick={handleClose}
          className={`p-2 rounded-lg transition-colors ${
            isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
          }`}
          aria-label="Close sidebar"
        >
          <X className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
        </button>
      </div>

      {/* Selected State Badge */}
      <div className={`mb-6 p-4 border rounded-lg ${
        isDark
          ? "bg-amber-900/20 border-amber-700/50"
          : "bg-amber-50 border-amber-200"
      }`}>
        <p className={`text-xs uppercase tracking-wider mb-1 ${
          isDark ? "text-amber-400" : "text-amber-700"
        }`}>
          Selected State
        </p>
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-gray-800"}`}>
          {stateData.name} ({selectedState})
        </p>
      </div>

      {/* Layer Options - Click to Open */}
      <div className="space-y-2">
        {Object.values(LAYER_CONFIG).map((layer) => {
          const resource = stateData.resources[layer.id];
          const hasResource = resource && (resource.type === "pdf" || resource.type === "external-link");

          return (
            <button
              key={layer.id}
              onClick={() => handleLayerClick(layer.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all text-left ${
                hasResource
                  ? isDark
                    ? "bg-gray-700 hover:bg-amber-900/30 hover:border-amber-600 border border-gray-600 cursor-pointer shadow-sm hover:shadow"
                    : "bg-white hover:bg-amber-50 hover:border-amber-300 border border-gray-200 cursor-pointer shadow-sm hover:shadow"
                  : isDark
                    ? "bg-gray-900/50 border border-gray-700 cursor-not-allowed opacity-60"
                    : "bg-gray-50 border border-gray-200 cursor-not-allowed opacity-60"
              }`}
            >
              <div className={`text-2xl ${hasResource ? "text-amber-500" : isDark ? "text-gray-600" : "text-gray-400"}`}>
                {hasResource ? "📄" : "🔒"}
              </div>
              <div className="flex-1">
                <p className={`font-medium ${
                  hasResource
                    ? isDark ? "text-white" : "text-gray-800"
                    : isDark ? "text-gray-600" : "text-gray-400"
                }`}>
                  {layer.label}
                </p>
                {resource && (
                  <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {resource.type === "pdf" ? "PDF Document" :
                     resource.type === "external-link" ? "External Link" :
                     "Coming Soon"}
                  </p>
                )}
              </div>
              {hasResource && (
                <span className="text-amber-500 text-sm">→</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className={`mt-8 pt-6 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
        <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Click on a data layer to open the resource in a new tab.
        </p>
      </div>
    </aside>
  );
}
