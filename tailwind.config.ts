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
        bg:              "var(--color-bg)",
        surface:         "var(--color-surface)",
        "surface-2":     "var(--color-surface-2)",
        "surface-elevated": "var(--color-surface-elevated)",
        ink:             "var(--color-text)",
        "ink-secondary": "var(--color-text-secondary)",
        "ink-muted":     "var(--color-text-muted)",
        "ink-soft":      "var(--color-text-soft)",
        accent:          "var(--color-accent)",
        "accent-light":  "var(--color-accent-light)",
        "accent-soft":   "var(--color-accent-soft)",
        "accent-2":      "var(--color-accent-2)",
        "accent-2-light":"var(--color-accent-2-light)",
        "accent-2-soft": "var(--color-accent-2-soft)",
        border:          "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        parchment:   "var(--color-bg)",
        emerald:     "var(--color-accent)",
        gold:        "var(--color-accent-2)",
        primary:     "var(--color-bg)",
        primary2:    "var(--color-surface-2)",
        second:      "var(--color-text)",
        off_white:   "var(--color-surface)",
      },
      borderRadius: {
        pixel:  "var(--radius-2xl)",
        card:   "var(--radius-lg)",
        badge:  "var(--radius-sm)",
      },
      boxShadow: {
        card:       "0 2px 16px -4px var(--color-card-shadow)",
        "card-hover":"0 8px 32px -6px var(--color-card-shadow-hover)",
        gold:       "0 4px 20px -4px var(--color-card-shadow)",
        inner:      "inset 0 1px 3px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        arabic: ["'Amiri Quran'", "serif"],
      },
      animation: {
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        "slide-up":   "slideUp 0.4s ease-out forwards",
        "shimmer":    "shimmer 2s linear infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:     { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp:    { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer:    { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
        pulseSoft:  { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.6" } },
      },
    },
  },
  plugins: [],
};
export default config;