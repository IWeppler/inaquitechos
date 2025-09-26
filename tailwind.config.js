/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2563eb",
        "brand-hover": "#1d4ed8",
        "brand-focus": "#3b82f6",
        "brand-red": "#fe141f",
        "footer-bg": "#1f2937",
        "footer-text": "#d1d5db",
        "footer-link-hover": "#2563eb",
      },
    },
  },
  plugins: [],
};
