/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#4e24f2",
        },
        secondary: {
          main: "#24f25e",
        },
        warning: {
          main: "#ffc120",
        },
        info: {
          main: "#21f396",
        },
        success: {
          main: "#1bde51",
        },
        error: {
          main: "#ff4b2f",
        },
        background: {
          default: "#0c0c14",
          paper: "#181828",
        },
        text: {
          primary: "#ffffff",
          secondary: "#e1e1fc",
          disabled: "#8d8da8",
          hint: "#e1e1fc",
        },
      },
    },
  },
  plugins: [],
};
