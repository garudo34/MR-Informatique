/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1978b8', // Bleu principal
        accent: '#1978b8', // CTA
        secondary: '#2E2E2E', // Bandeau header
        light: '#F5F7FA', // Background léger
      },
      fontFamily: {
        // sans: ['var(--font-inter)'],
        // display: ['var(--font-poppins)'],
        walkway: ['Walkway Black'],
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
}
