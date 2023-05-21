/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'color-accent-main': '#b05ec4',
      },

      backgroundColor: {
        'color-accent-main': '#b05ec4',
      },
      fontSize: {
        'font-nav': '1.1rem',
      },
    },
  },
  plugins: [],
};
