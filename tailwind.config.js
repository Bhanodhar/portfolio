/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#FFB236', // Warm amber/yellow shade
        'secondary': '#94A3B8',
        'background': '#F8FAFC',
        'dark': {
          'background': '#0F172A',
          'text': '#E2E8F0',
        },
        'light': {
          'text': '#0F172A',
          'background': '#F8FAFC',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}