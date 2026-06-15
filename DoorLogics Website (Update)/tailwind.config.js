/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            primary: '#E63946',   // Deep Red Accent
            secondary: '#F4A261', // Orange/Amber Emergency Accent
            dark: '#111827',      // Deep slate/black for backgrounds and heavy text
            slate: '#4B5563',     // Readable gray for paragraph text
            surface: '#F9FAFB',   // Off-white for subtle card backgrounds
            bg: '#FFFFFF',        // Pure white base
            border: '#E5E7EB',    // Crisp, subtle borders
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Syncopate', 'system-ui', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }