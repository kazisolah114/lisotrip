/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const themeColors = require('tailwindcss/defaultTheme');

      const colors = {
        ...themeColors,
        'primary-color': 'var(--primary-color)',
        'primary-color-hover': 'var(--primary-color-hover)',
      };

      const colorUtilities = {};
      Object.keys(colors).forEach((color) => {
        colorUtilities[`.text-${color}`] = { color: colors[color] };
        colorUtilities[`.bg-${color}`] = { backgroundColor: colors[color] };
      });

      addUtilities(colorUtilities, ['responsive', 'hover']);
    },
  ],
};
