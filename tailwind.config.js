/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'goyang': 'goyang 1s ease-in-out infinite',
        'fast-pulse': 'pulse .5s ease-in infinite'
      },
      keyframes: {
        goyang: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}