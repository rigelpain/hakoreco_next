---
inject: true
to: "<%= isCssModules ? '_templates/generator/component/index.ejs.t' : null %>"
at_line: 7
skip_if: styled
---
import styled from "./style.module.scss";
