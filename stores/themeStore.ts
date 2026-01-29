import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: "light",

        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          })),

        setTheme: (theme) => set({ theme }),
      }),
      {
        name: "theme-storage",
      }
    )
  )
);
