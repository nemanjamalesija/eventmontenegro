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
        'color-shadest': '#f7eff9',
      },

      backgroundColor: {
        'color-accent-main': '#b05ec4',
        'color-shade-main': '#9e55b0',
      },
      fontSize: {
        'font-nav': '1.1rem',
      },

      stroke: {
        'stroke-icon-primary': '#b05ec4',
      },
    },
  },
  plugins: [],
};
