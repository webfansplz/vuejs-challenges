import type { Plugin } from "vite"

export function MarkdownTransform(): Plugin {
  return {
    name: "vueuse-md-transform",
    enforce: "pre",
    async transform(code, id) {
      if (!id.endsWith(".md"))
        return null

      /* eslint-disable prefer-regex-literals */
      const regexp = new RegExp(
        "<!--info-footer-start--><br><a href=\"([\\s\\S]*?)\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-Back-grey\" alt=\"Back\"/></a>",
      )

      code = code.replace(regexp, "")
      return code
    },
  }
}
