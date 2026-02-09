import { create } from "zustand"
import { persist } from "zustand/middleware"

export const eventThemeList = { default: "default", holi: "holi" }

export const useEventTheme = create(
  persist(
    (set) => ({
      theme: eventThemeList.default,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "event-theme",
    },
  ),
)
