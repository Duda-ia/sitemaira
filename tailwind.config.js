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
        'neutral-dark': '#1F3654',
        'text-primary': '#1F3654',
        'text-secondary': '#4A5568',
        accent: '#A6B5A8',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'Cinzel', 'Playfair Display', 'Cormorant Garamond', 'serif'],
        'redhat': ['Red Hat Display', 'Work Sans', 'Poppins', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
