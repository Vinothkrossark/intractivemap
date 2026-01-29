"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useMapStore } from "@/stores/mapStore";
import { useThemeStore } from "@/stores/themeStore";
import { MAP_CONFIG, LAYER_CONFIG } from "@/data/map-config";
import type { LayerType } from "@/types";

export function MobileSidebar() {
  const { selectedState, setSelectedState } = useMapStore();
  const { theme } = useThemeStore();

  const isDark = theme === "dark";

  // Auto-show when state is selected
  const isOpen = !!selectedState && !!MAP_CONFIG[selectedState];

  // Removed body scroll lock to allow scrolling

  if (!isOpen || !selectedState) {
    return null;
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
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet */}
      <div className={`fixed bottom-0 inset-x-0 rounded-t-3xl p-6 z-50 lg:hidden max-h-[85vh] overflow-y-auto touch-scroll shadow-2xl animate-slide-up ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}>
        {/* Drag Handle */}
        <div className={`w-12 h-1 rounded-full mx-auto mb-4 ${isDark ? "bg-gray-600" : "bg-gray-300"}`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
              Data Layers
            </h2>
            <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Tap a layer to open resource
            </p>
          </div>
          <button
            onClick={handleClose}
            className={`p-2 rounded-lg transition-colors touch-target ${
              isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
            aria-label="Close menu"
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

        {/* Layer Options - Tap to Open */}
        <div className="space-y-3">
          {Object.values(LAYER_CONFIG).map((layer) => {
            const resource = stateData.resources[layer.id];
            const hasResource = resource && (resource.type === "pdf" || resource.type === "external-link");

            return (
              <button
                key={layer.id}
                onClick={() => handleLayerClick(layer.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all text-left touch-target ${
                  hasResource
                    ? isDark
                      ? "bg-gray-700 active:bg-amber-900/30 border border-gray-600 shadow-sm"
                      : "bg-white active:bg-amber-50 border border-gray-200 shadow-sm"
                    : isDark
                      ? "bg-gray-900/50 border border-gray-700 opacity-60"
                      : "bg-gray-50 border border-gray-200 opacity-60"
                }`}
              >
                <div className={`text-3xl ${hasResource ? "text-amber-500" : isDark ? "text-gray-600" : "text-gray-400"}`}>
                  {hasResource ? "📄" : "🔒"}
                </div>
                <div className="flex-1">
                  <p className={`font-medium text-base ${
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
                  <span className="text-amber-500 text-xl">→</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Info */}
        <div className={`mt-6 pt-6 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
          <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Tap on a data layer to open the resource in a new tab.
          </p>
        </div>
      </div>
    </>
  );
}
