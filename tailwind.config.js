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
        "form-cus": "#FFD89C",
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
      fontFamily: {
        // helvetica: ['Helvetica-Regular', 'sans-serif'],
        // poppin: ["Poppins-Medium", "sans-serif"],
        inter: ["Inter-Medium", "sans-serif"],
        // momo: ['ui-monospace', 'system-ui'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".title-custom": {
          fontWeight: "600", 
          fontSize: "1.25rem", 
          lineHeight: "1.75rem",
          transitionProperty: "all",
          transitionDuration: "0.5s",
          "@screen md": {
            fontSize: "1.5rem",
            lineHeight: "2rem",
          },
          "@screen lg": {
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
          },
          color: "#333",
        },
      });
    },
    require("@tailwindcss/forms")
  ],
};
