import DefaultTheme from "vitepress/theme"
import "./styles/overrides.css"

import type { Theme } from "vitepress"
const define = <T>(value: T): T => value

export default define<Theme>({
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    // globals.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })
  },
})
