/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D91C1C',
        'brand-red-dark': '#A81212',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['12px', { lineHeight: '1.5' }],
        'sm':   ['13px', { lineHeight: '1.6' }],
        'base': ['15px', { lineHeight: '1.65' }],
        'lg':   ['17px', { lineHeight: '1.5' }],
        'xl':   ['19px', { lineHeight: '1.4' }],
        '2xl':  ['22px', { lineHeight: '1.3' }],
        '3xl':  ['28px', { lineHeight: '1.2' }],
        '4xl':  ['32px', { lineHeight: '1.15' }],
      },
    },
  },
  plugins: [],
}
