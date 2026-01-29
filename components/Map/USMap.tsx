"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { useMapStore } from "@/stores/mapStore";
import { useThemeStore } from "@/stores/themeStore";
import type { StateCode } from "@/types";

// US States TopoJSON from CDN
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// State name to code mapping
const STATE_CODES: Record<string, StateCode> = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

// State-specific colors for visual variety (all 50 states) - Pastel palette
const STATE_COLORS: Record<string, string> = {
  // West Coast
  CA: "#FFD5B5", // Pastel Peach
  OR: "#B5E7A0", // Pastel Green
  WA: "#B8E0D2", // Pastel Mint

  // Southwest
  AZ: "#F5E6AD", // Pastel Yellow
  NM: "#F2C6DE", // Pastel Pink
  NV: "#B5DDD1", // Pastel Teal
  UT: "#E5C4A1", // Pastel Tan
  CO: "#D4C5F9", // Pastel Lavender

  // Mountain
  MT: "#E8F3D6", // Pastel Lime
  WY: "#FFE9B1", // Pastel Cream
  ID: "#C4E7F5", // Pastel Sky

  // Midwest
  ND: "#E0D4F7", // Pastel Purple
  SD: "#FFDDC1", // Pastel Coral
  NE: "#C8E6C9", // Pastel Sage
  KS: "#F8D7DA", // Pastel Rose
  MN: "#C8D8E4", // Pastel Blue
  IA: "#B8E6D5", // Pastel Seafoam
  MO: "#EFEAD8", // Pastel Beige
  WI: "#D4C5E2", // Pastel Periwinkle
  IL: "#BEEAE5", // Pastel Aqua
  MI: "#FFEAA7", // Pastel Butter
  IN: "#FAD4D8", // Pastel Blush
  OH: "#C5E3F6", // Pastel Baby Blue

  // South Central
  OK: "#F5CBA7", // Pastel Apricot
  TX: "#FFE5B4", // Pastel Gold
  AR: "#DCC6E0", // Pastel Mauve
  LA: "#FFF4C1", // Pastel Lemon

  // Southeast
  MS: "#D1F2D5", // Pastel Mint Green
  AL: "#C5DFF8", // Pastel Powder Blue
  TN: "#F8C8DC", // Pastel Carnation
  KY: "#E8D5E8", // Pastel Orchid
  GA: "#FFEBB7", // Pastel Wheat
  FL: "#B5EAD7", // Pastel Tiffany
  SC: "#D6EFFF", // Pastel Ice Blue
  NC: "#FFD8BE", // Pastel Salmon
  VA: "#E1F5C4", // Pastel Pistachio
  WV: "#E8DFF5", // Pastel Lilac

  // Northeast
  MD: "#C8E9D0", // Pastel Jade
  DE: "#FCF4DD", // Pastel Ivory
  NJ: "#F8D7E8", // Pastel Ballet
  PA: "#D4E7F5", // Pastel Horizon
  NY: "#C2E8CE", // Pastel Celadon
  CT: "#FFF2CC", // Pastel Vanilla
  RI: "#E5D4ED", // Pastel Wisteria
  MA: "#C8DDEA", // Pastel Serenity
  VT: "#FAD7D4", // Pastel Petal
  NH: "#D8DAEF", // Pastel Periwinkle Blue
  ME: "#C1F0F6", // Pastel Arctic

  // Alaska & Hawaii
  AK: "#AFEEEE", // Pastel Turquoise
  HI: "#FFDFD3", // Pastel Melon
};

export function USMap() {
  const { setSelectedState } = useMapStore();
  const { theme } = useThemeStore();
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const isDark = theme === "dark";

  const handleStateClick = (geo: { properties: { name: string } }) => {
    const stateName = geo.properties.name;
    const stateCode = STATE_CODES[stateName];

    if (!stateCode) return;

    // Show sidebar for ALL states (even without configured data)
    setSelectedState(stateCode);
  };

  const handleMouseEnter = (geo: any, event: any) => {
    const stateName = geo.properties.name;
    const stateCode = STATE_CODES[stateName];
    if (stateCode) {
      setTooltipContent(stateName);
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div className="w-full max-w-7xl mx-auto relative">
      {/* Tooltip */}
      {tooltipContent && (
        <div
          className={`fixed z-50 px-3 py-2 rounded-lg shadow-xl border pointer-events-none text-sm font-medium ${isDark
            ? "bg-gray-700 text-white border-amber-400/50"
            : "bg-gray-800 text-white border-amber-400/50"
            }`}
          style={{
            left: `${tooltipPosition.x + 10}px`,
            top: `${tooltipPosition.y - 10}px`,
          }}
        >
          {tooltipContent}
        </div>
      )}

      <ComposableMap
        projection="geoAlbersUsa"
        className="w-full h-auto"
        projectionConfig={{
          scale: 1000,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const stateName = geo.properties.name;
              const stateCode = STATE_CODES[stateName];

              // Get state-specific color or default gray
              const stateColor = stateCode && STATE_COLORS[stateCode]
                ? STATE_COLORS[stateCode]
                : "#6B7280";

              return (
                <g key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    onClick={() => handleStateClick(geo)}
                    onMouseEnter={(event: any) => handleMouseEnter(geo, event)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill: stateColor,
                        stroke: isDark ? "#374151" : "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: stateColor,
                        stroke: "#F59E0B",
                        strokeWidth: 2,
                        outline: "none",
                        cursor: "pointer",
                        filter: "brightness(1.1)",
                      },
                      pressed: {
                        fill: stateColor,
                        stroke: "#F59E0B",
                        strokeWidth: 2.5,
                        outline: "none",
                        filter: "brightness(0.95)",
                      },
                    }}
                    className="transition-all"
                  />
                </g>
              );
            })
          }
        </Geographies>

        {/* State Labels - Dynamically render for all states */}
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const stateName = geo.properties.name;
              const stateCode = STATE_CODES[stateName];

              if (!stateCode) return null;

              // Calculate centroid for label placement
              const centroid = geoCentroid(geo);

              return (
                <Marker key={`${geo.rsmKey}-label`} coordinates={centroid}>
                  <text
                    textAnchor="middle"
                    fontSize="10"
                    fill={isDark ? "#FFFFFF" : "#000000"}
                    fontWeight="700"
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  >
                    {stateCode}
                  </text>
                </Marker>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
