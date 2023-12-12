/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
export default {
  content : ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',  "./node_modules/flowbite/**/*.js"],
  darkMode: true,
  theme: {
    extend: {
      gap:{
        md: '10px'
      },
      padding: {
        md: "10px"
      }
    },
  },

  plugins: [ flowbitePlugin]
}
