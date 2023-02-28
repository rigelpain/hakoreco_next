---
inject: true
to: "<%= isTailwindCss ? 'package.json' : null %>"
after: devDependencies
skip_if: tailwindcss
---
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.2.6",