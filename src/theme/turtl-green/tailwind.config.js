/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './templates/**/*.hubl.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        parafina: ['Parafina', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
};
