import type { Config } from 'tailwindcss'
import {Inter, Lato, Open_Sans } from 'next/font/google'

const config: Config = {
  content: [
    './src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/calendar/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#EBF3FE',
          600: '#101277',
          800: 'hsla(258, 65%, 35%,1)',
        },
        aliceblue: "#ebf3fe",
        white: "#fff",
        gray: {
          "100": "#797979",
          "200": "#767a7b",
          "300": "rgba(49, 39, 37, 0.4)",
          "400": "rgba(49, 39, 37, 0.2)",
        },
        aquamarine: {
          "100": "#6deca9",
          "200": "#00ffcc",
        },
        black: "#000",
        darkslategray: {
          "100": "#384042",
          "200": "rgba(56, 64, 66, 0.5)",
        },
        darkgray: "#bcaaa4",
        hotpink: "#ff8ed4",
        darkturquoise: "#29cce5",
        steelblue: "#5ba4cf",
        plum: "#cd8de5",
        lightpink: "#ef9a9a",
        burlywood: "#ffcc80",
        gold: "#f5dd29",
        beige: "#c8e6c9",
        midnightblue: "#101277",
        crimson: "#d42222",
        dimgray: "#626262",
        slateblue: "#394abc",
        lavender: "#d1dcf0",
        indigo: "#421f91",

      },
      fontFamily: {
        "open-sans": "'Open Sans'",
        lato: "Lato",
        inter: "Inter",
      },
      borderRadius: {
        "21xl": "40px",
        "81xl": "100px",
      },

    },
    fontSize: {
      base: "16px",
      xs: "12px",
      lg: "18px",
      "5xl": "24px",
      "26xl": "45px",
      "61xl": "80px",
      "16xl": "35px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  plugins: [],
}
export default config
