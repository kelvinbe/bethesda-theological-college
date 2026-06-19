import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f0ea" },
          100: { value: "#c2d6c8" },
          200: { value: "#9bbba3" },
          300: { value: "#6f9a7a" },
          400: { value: "#4c7a5a" },
          500: { value: "#0B2E14" }, // Savannah Green (PRIMARY)
          600: { value: "#082711" },
          700: { value: "#061f0e" },
          800: { value: "#04170a" },
          900: { value: "#021006" },
        },

        gold: {
          500: { value: "#d4af37" }, // Obsidian Gold
        },

        earth: {
          500: { value: "#7A4A2A" }, // Bark Brown
        },

        clay: {
          500: { value: "#9B4A20" }, // Terracotta
        },
      },

      fonts: {
        heading: { value: "Georgia, serif" },
        body: { value: "Georgia, serif" },
      },

      fontSizes: {
        xs: { value: "12px" },
        sm: { value: "14px" },
        md: { value: "16px" },
        lg: { value: "20px" },
        xl: { value: "28px" },
        "2xl": { value: "36px" },
        "3xl": { value: "48px" },
        "4xl": { value: "64px" },
      },

      lineHeights: {
        normal: { value: "1.5" }, // brand rule
      },
    },
  },
});