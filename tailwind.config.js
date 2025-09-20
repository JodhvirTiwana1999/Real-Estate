/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xm:'480px'  // custom breakpoint (optional)
      },
    },
  },
  plugins: [],
}
