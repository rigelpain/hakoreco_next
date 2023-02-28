---
to: "<%= isTailwindCss ? 'postcss.config.js' : null %>"
unless_exists: true
---
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
