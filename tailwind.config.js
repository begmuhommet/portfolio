/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 16,
      },
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
