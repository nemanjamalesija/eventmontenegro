/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: '1fr 1fr',
      },

      maxWidth: {
        custom: '75rem',
      },

      textColor: {
        'color-accent-main': '#E66B80',
        'color-shade-main': '#cf6073',
        'color-shadest': '#fafafa',
      },

      backgroundColor: {
        'color-accent-main': '#E66B80',
        'color-shade-main': '#cf6073',
        'color-shadest': '#fafafa',
        'bg-general': '#fafafa',
        'color-lightest': '#fdf2f3',
      },
      fontSize: {
        'font-nav': '1.1rem',
        '16rem': '1.42rem',
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
