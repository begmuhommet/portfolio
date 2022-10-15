/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html}'],
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
      },
    },
  },
  plugins: [],
};
