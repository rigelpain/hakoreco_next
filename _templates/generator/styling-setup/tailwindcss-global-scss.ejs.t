---
to: "<%= isTailwindCss ? 'src/styles/global.scss' : null %>"
unless_exists: true
---
@use "tailwindcss/base";
@use "tailwindcss/components";
@use "tailwindcss/utilities";
