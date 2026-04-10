/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myAmber: '#84cc16',
      },
      screens: {
        cb: '990px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
