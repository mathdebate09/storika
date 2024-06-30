/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
        playwrite: ["Playwrite US Modern", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      golden: "hsla(43, 74%, 66%, 1)",
      "soft-black": "hsla(0, 0%, 20%, 1)",
      ruby: "hsla(350, 100%, 23%, 1)",
      "header-bg": "hsla(43, 74%, 95%, 1)",
      "system-bg": "hsla(43, 74%, 97%, 1)",
      "nav-bg": "hsla(350, 100%, 20%, 1)",
      "soft-white": "hsla(210, 8%, 95%, 1)",
    },
  },
  plugins: [],
}
