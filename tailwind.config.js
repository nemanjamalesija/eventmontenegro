/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-accent-main': '#E66B80',
        'color-shade-main': '#cf6073',
        'ring-color-primary': '#ee97a6',
        'color-lightest': '#fdf2f3',

        'color-gray-light-1': '#fafafa',
      },

      height: {
        'custom-nav': 'calc(100vh+1000px)',
      },
      gridTemplateColumns: {
        custom2fr: '1fr 1fr',
        custom3fr: '1fr 1fr 1fr',
      },

      maxWidth: {
        custom: '75rem',
      },

      fontSize: {
        'font-nav': '1.1rem',
        'hero-p': '1.42rem',
      },
      scale: ['hover'],
    },
  },
  plugins: [],
};
