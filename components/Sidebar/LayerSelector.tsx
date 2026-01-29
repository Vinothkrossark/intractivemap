"use client";

import { useMapStore } from "@/stores/mapStore";
import { LAYER_CONFIG } from "@/data/map-config";
import { LayerOption } from "./LayerOption";
import type { LayerType } from "@/types";

export function LayerSelector() {
  const { layers, toggleLayer } = useMapStore();

  return (
    <div className="space-y-2">
      {Object.values(LAYER_CONFIG).map((layer) => (
        <LayerOption
          key={layer.id}
          id={layer.id}
          label={layer.label}
          icon={layer.icon}
          checked={layers[layer.id]}
          onChange={(id) => toggleLayer(id as LayerType)}
        />
      ))}
    </div>
  );
}
