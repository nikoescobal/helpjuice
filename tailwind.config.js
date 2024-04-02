/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        '.42': '.42',
      },
      animation: {
        blob: 'blob 7s infinite',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(10px, -20px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-10px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1.75deg)',
          },
          '75%': {
            transform: 'rotate(-1.75deg)',
          },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
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
      fontWeight: {
        blacker: '950',
      },
      screens: {
        xxl: '1350px',
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
