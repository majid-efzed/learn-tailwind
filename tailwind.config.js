/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'kufi': ['"Reem Kufi"', 'cursive'],
      },
      animation: {
        'goyang': 'goyang 1s ease-in-out infinite',
        'fast-pulse': 'pulse .5s ease-in infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      colors: {
        primary: '#14b8a6',
        reading: '#64748b',
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}