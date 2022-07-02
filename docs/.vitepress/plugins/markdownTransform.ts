import path from "path"
import type { Plugin } from "vite"

const HOST = "https://cn-vuejs-challenges.netlify.app"

export function MarkdownTransform(): Plugin {
  return {
    name: "vueuse-md-transform",
    enforce: "pre",
    async transform(code, id) {
      if (!id.endsWith(".md"))
        return null

      /* eslint-disable prefer-regex-literals */
      const backbadegeRegexp = new RegExp(
        "<!--info-footer-start--><br><a href=\"([\\s\\S]*?)\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-Back-grey\" alt=\"Back\"/></a>",
      )

      const chinesebadegeRegexp = new RegExp(
        "<a href=\"./([\\s\\S]*?)\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray\" alt=\"简体中文\"/></a>",
      )

      const pathInfo = path.parse(path.relative(process.cwd(), id))
      const host = `${HOST}/${path.join(pathInfo.dir, "README.zh-CN")}`
      const replaceContent = `<a href=\"${host}" target=\"_blank\"><img src=\"https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray\" alt=\"简体中文\"/></a>`

      code = code.replace(backbadegeRegexp, "").replace(chinesebadegeRegexp, replaceContent)

      return code
    },
  }
}
