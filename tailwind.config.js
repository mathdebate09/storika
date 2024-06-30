/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
        playwrite: ['Playwrite US Modern', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
