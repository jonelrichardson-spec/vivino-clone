/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vivino-burgundy': '#721C24',
        'vivino-green': '#008767',
        'vivino-red': '#DC3545',
      },
    },
  },
  plugins: [],
}