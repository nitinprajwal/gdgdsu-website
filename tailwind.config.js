/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285F4',
          red: '#DB4437',
          yellow: '#F4B400',
          green: '#0F9D58'
        }
      },
      fontFamily: {
        'google-sans': ['Google Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};