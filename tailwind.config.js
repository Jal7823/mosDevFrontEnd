/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  'darkMode':'class',
  theme: {
    extend: {
      colors:{
        'bg-custonred':'#F03E42',
        'bg-customyellow':'#FFC403',
        'bg-customgreen':'#3AE1D0',
        'bg-customskiblue':'#B7DCF1',
        'bg-customligthviolet':'#CEDAF5',
        'bg-customblack':'#000',
        'bg-custumgray':'#22272E',
        'bg-customligthtext':'#979797'

      }
    },
  },
  plugins: [],
}

