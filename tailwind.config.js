/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5A27',
        secondary: '#D4A574',
        accent: '#8B4513',
        background: '#FDFBF7',
        'text-primary': '#1A1A1A',
        'text-secondary': '#5A5A5A',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}