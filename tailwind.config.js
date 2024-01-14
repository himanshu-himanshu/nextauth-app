/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Slab", "serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      backgroundImage: {
        hero: "url('/public/bg3.jpg')",
      },
    },
  },
  plugins: [],
};
