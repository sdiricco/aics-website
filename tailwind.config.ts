/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066b3',
        primaryLighter: '#479bda',
        primaryDarker: '#004a81',
        accent: '#d20222', 
        secondaryAccent: '#318343' 
      },
      
    },
  },
  plugins: [],
}
