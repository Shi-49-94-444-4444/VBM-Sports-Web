/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-cus": "#FFA500",
        "search-cus": "#f5f4f2",
        "white-cus": "#e5e3dd",
        "gray-cus": "#D6D6D6",
        "gray-cus-2": "#333F51",
        "orange-cus": "#F84C35",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "auto-auto": "auto auto",
      },
      gridTemplateRows: {
        cus: "64px",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      lineHeight: {
        xxs: "0.75rem",
      },
    },
  },
  plugins: [],
};
