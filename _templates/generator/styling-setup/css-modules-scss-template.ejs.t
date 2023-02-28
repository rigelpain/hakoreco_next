---
to: "<%= isCssModules ? '_templates/generator/component/scss.ejs.t' : null %>"
unless_exists: true
---
---
to: src/<%%= componentPath %>/style.module.scss
---
@use "@/styles/helper" as *;
