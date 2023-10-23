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
        'bg-custom-red':'#F03E42',
        'bg-custom-yellow':'#FFC403',
        'bg-custom-green':'#3AE1D0',
        'bg-custom-skiblue':'#B7DCF1',
        'bg-custom-ligthviolet':'#CEDAF5',
        'bg-custom-black':'#000',
        'bg-custom-gray':'#22272E',
        'bg-custom-ligthtext':'#979797'

      },
      
    },
  },
  plugins: [],
}

