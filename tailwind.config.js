/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef4ff",
          100: "#dbe6fe",
          200: "#bfd2fe",
          300: "#93b4fd",
          400: "#608bf9",
          500: "#3b66f4",
          600: "#2547e8",
          700: "#1e3ad1",
          800: "#1e3a8a",
          900: "#1e2f6b",
          950: "#101a3f"
        },
        accent: {
          500: "#10b981",
          600: "#059669",
          700: "#047857"
        },
        gold: {
          500: "#f59e0b",
          600: "#d97706"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(30, 58, 138, 0.18)",
        card: "0 4px 20px -8px rgba(15, 23, 42, 0.12)"
      },
      maxWidth: {
        prose: "70ch"
      }
    }
  },
  plugins: []
};
