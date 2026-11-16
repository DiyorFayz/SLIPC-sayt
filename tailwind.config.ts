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
          brand: "#24356F",
          deep: "#101F52",
          soft: "#344A94",
          tint: "#E6EAF5",
          accent: "#12715A",
          "accent-tint": "#E3F1EC",
          ink: "#1B1F2A",
          muted: "#5C6478",
          faint: "#8A91A3",
          surface: "#FFFFFF",
          ground: "#F3F5FB",
          rule: "#DDE2EF",
        },
        embl: {
          navy: "#24356F",
          "navy-light": "#344A94",
          "navy-dark": "#101F52",
          green: "#12715A",
          "green-tint": "#E3F1EC",
          "green-dark": "#0D5846",
          blue: "#24356F",
          "blue-tint": "#E6EAF5",
          "blue-dark": "#101F52",
          slate: "#5C6478",
          border: "#DDE2EF",
          bg: "#F3F5FB",
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
        "pharmi-card":
          "0 1px 2px rgba(36, 53, 111, 0.05), 0 10px 24px -14px rgba(36, 53, 111, 0.25)",
        "pharmi-raised":
          "0 4px 12px rgba(36, 53, 111, 0.08), 0 20px 38px -16px rgba(36, 53, 111, 0.30)",
        "pharmi-header":
          "0 1px 0 rgba(36, 53, 111, 0.08), 0 6px 20px -16px rgba(36, 53, 111, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
