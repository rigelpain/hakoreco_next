---
inject: true
to: "<%= isTailwindCss ? 'src/pages/_app.tsx' : null %>"
at_line: 1
skip_if: "@/styles/global.scss"
---
import "@/styles/global.scss";