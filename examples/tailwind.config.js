/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#61dafb",
        background: "#121212",
        secondary: "#282c34",
        accent: "#ff6b6b",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      boxShadow: {
        visualizer: "0 10px 30px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
