/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: '#B87A6B',
        'brand-light': '#E6CFC7',
        'brand-dark': '#8B4E3F',
        'neutral-light': '#F7F5F2',
        'neutral-dark': '#2E2E2E',
        accent: '#A6B5A8',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
