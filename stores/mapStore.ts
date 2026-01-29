import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import type { StateCode, LayerType } from "@/types";

interface MapState {
  selectedState: StateCode | null;
  layers: Record<LayerType, boolean>;
  setSelectedState: (state: StateCode | null) => void;
  toggleLayer: (layer: LayerType) => void;
  resetLayers: () => void;
}

const DEFAULT_LAYERS: Record<LayerType, boolean> = {
  ibewDistricts: true, // Default checked
  ibewRosendinContacts: false,
  necaChapters: false,
  necaRosendinContacts: false,
  activeProjects: false,
  license: false,
};

export const useMapStore = create<MapState>()(
  devtools(
    persist(
      (set) => ({
        selectedState: null,
        layers: DEFAULT_LAYERS,

        setSelectedState: (state) => set({ selectedState: state }),

        toggleLayer: (layer) =>
          set((prev) => {
            // Radio button behavior: only one layer active at a time
            const newLayers = Object.keys(prev.layers).reduce(
              (acc, key) => ({
                ...acc,
                [key]: key === layer,
              }),
              {} as Record<LayerType, boolean>
            );
            return { layers: newLayers };
          }),

        resetLayers: () => set({ layers: DEFAULT_LAYERS }),
      }),
      {
        name: "map-storage",
        // Only persist layer preferences
        partialize: (state) => ({ layers: state.layers }),
      }
    )
  )
);
