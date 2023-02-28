---
to: "<%= isTailwindCss ? 'tailwind.config.js' : null %>"
unless_exists: true
---
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
