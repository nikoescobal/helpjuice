/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        'alphabetized-cassette-tapes-thin': [
          'Alphabetized Cassette Tapes Thin',
          'sans-serif',
        ],
        'alphabetized-cassette-tapes-classic': [
          'Alphabetized Cassette Tapes Classic',
          'sans-serif',
        ],
        'alphabetized-cassette-tapes': [
          'Alphabetized Cassette Tapes',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '-0.5px 0.5px 0 purple',
          textDecoration: 'underline',
          transitionDuration: '400ms',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
