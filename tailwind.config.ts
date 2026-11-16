import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pharmi: {
          brand: "#0F2942",
          deep: "#081726",
          soft: "#1E3D5F",
          tint: "#E8EEF5",
          accent: "#108A54",
          "accent-tint": "#EBF7F1",
          ink: "#0F172A",
          muted: "#475569",
          faint: "#94A3B8",
          surface: "#FFFFFF",
          ground: "#F4F6F9",
          rule: "#E2E8F0",
        },
        embl: {
          navy: "#0F2942",
          "navy-light": "#1E3D5F",
          "navy-dark": "#081726",
          green: "#108A54",
          "green-tint": "#EBF7F1",
          "green-dark": "#0C6B41",
          blue: "#0F2942",
          "blue-tint": "#E8EEF5",
          "blue-dark": "#081726",
          slate: "#475569",
          border: "#E2E8F0",
          bg: "#F4F6F9",
        },
      },
      fontFamily: {
        display: [
          '"Manrope"',
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "sans-serif",
        ],
        body: [
          '"Plus Jakarta Sans"',
          '"Inter"',
          "ui-sans-serif",
          "sans-serif",
        ],
        sans: [
          '"Plus Jakarta Sans"',
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"IBM Plex Mono"',
          '"JetBrains Mono"',
          "Consolas",
          "Courier New",
          "monospace",
        ],
        outlier: [
          '"IBM Plex Mono"',
          '"JetBrains Mono"',
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "pharmi-card": "0 1px 3px rgba(15, 41, 66, 0.04), 0 1px 2px rgba(15, 41, 66, 0.02)",
        "pharmi-raised": "0 4px 6px -1px rgba(15, 41, 66, 0.06), 0 2px 4px -2px rgba(15, 41, 66, 0.04)",
        "pharmi-header": "0 1px 0 #E2E8F0",
      },
    },
  },
  plugins: [],
};

export default config;
