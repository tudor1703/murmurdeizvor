import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark luxury palette
        charcoal: {
          DEFAULT: "#0d0c0a",
          50: "#1a1714",
          100: "#16130f",
          200: "#12100c",
        },
        ebony: "#171411",
        wood: {
          DEFAULT: "#1f1a14",
          deep: "#15110d",
        },
        gold: {
          DEFAULT: "#c9a961",
          50: "#f3e9cd",
          100: "#e6d4a3",
          200: "#d8be84",
          300: "#c9a961",
          400: "#b08f47",
          muted: "#a08649",
          dark: "#7a6433",
        },
        ivory: "#f3ece0",
        beige: "#c9bfae",
        moss: "#2c3a2a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.18em",
      },
      backgroundImage: {
        "hero-vignette":
          "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
        "soft-noise":
          "linear-gradient(180deg, rgba(13,12,10,0.0) 0%, rgba(13,12,10,0.55) 60%, rgba(13,12,10,0.95) 100%)",
      },
      boxShadow: {
        glow: "0 25px 60px -20px rgba(201, 169, 97, 0.25)",
        soft: "0 30px 80px -30px rgba(0,0,0,0.7)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
