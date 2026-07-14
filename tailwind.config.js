/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        primary: {
          DEFAULT: "var(--color-primary)",
          soft: "var(--color-primary-soft)",
          hover: "var(--color-primary-hover)",
        },
        "on-primary": "var(--color-on-primary)",
        accent: {
          DEFAULT: "var(--color-accent)",
          soft: "var(--color-accent-soft)",
        },
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",
        "focus-ring": "var(--color-focus-ring)",
        glass: {
          bg: "var(--color-glass-bg)",
          border: "var(--color-glass-border)",
          shadow: "var(--color-glass-shadow)",
        },
      },
      maxWidth: {
        container: "1000px",
      },
      boxShadow: {
        glow: "0 0 20px var(--color-primary-soft)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        reveal: "cubic-bezier(0.21, 1.02, 0.47, 0.98)",
      },
    },
  },
  plugins: [],
}
