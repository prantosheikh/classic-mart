/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         transitionDuration: {
            '300': '800ms',
         },
      },
   },
   plugins: [require("daisyui")],
}

