/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        130: '105%',
      },
      height: {
        130: '105%',
      },

      gridTemplateColumns: {
        custom: '1fr 1fr',
      },

      maxWidth: {
        custom: '87rem',
      },

      textColor: {
        'color-accent-main': '#E66B80',
        'color-shadest': '#f7eff9',
      },

      backgroundColor: {
        'color-accent-main': '#E66B80',
        'color-shade-main': '#cf6073',
        'color-shadest': '#f7eff9',
      },
      fontSize: {
        'font-nav': '1.1rem',
        '16rem': '1.6rem',
      },

      stroke: {
        'stroke-icon-primary': '#b05ec4',
      },
      ringColor: {
        'ring-color-primary': '#ee97a6',
      },
    },
  },
  plugins: [],
};
