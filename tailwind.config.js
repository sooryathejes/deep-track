/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px', 
        'xs': '560px',
        'sm': '768px',
        'lg': '1140px',
      },
    },
  },
  plugins: [],
}