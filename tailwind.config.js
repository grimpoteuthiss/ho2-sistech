/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors:{
      yellow: "#ffe043",
      "blue": "#60d5ec",
      green: "#75bc52",
      maroon: "#E64564",
      red: "#F38697",
      white: "#fff",
      ink: "#333",
      background: "#fdf9f8",
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },
    extend: {
      boxShadow: {
        "hover": "6px 6px 0px 0px"
      },
    },
  },
  plugins: [],
}

