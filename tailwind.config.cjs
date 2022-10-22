/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#CB7731',
          light: 'rgba(203, 119, 49, 0.1)',
        },
        secondary: {
          main: '#EFC06B',
          light: 'rgba(239, 192, 107, 0.1)',
        },
        text: {
          main: '#A5B3C2',
          light: '#A7B6C4',
        },
        background: {
          main: '#2B2B2B',
          light: '#3C3F41',
        },
        custom: {
          blue: '#644771',
          green: '#5F8148',
          white: '#A9B7C6',
        },
      },
    },
    container: {
      padding: '2rem',
      center: true,
      screens: {
        sm: '648px',
        md: '756px',
        lg: '992px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
