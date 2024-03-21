/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '-0.5px 0.5px 0 purple',
          textDecoration: 'underline',
          transitionDuration: '300ms',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
