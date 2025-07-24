/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00', // oranye utama
        orange: {
          DEFAULT: '#FF6B00',
          500: '#FF6B00',
          600: '#FF6600',
        },
        dark: {
          DEFAULT: '#181C2A',
          surface: '#23263A',
        },
        background: '#181C2A',
        surface: '#23263A',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
