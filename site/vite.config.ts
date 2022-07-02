import { resolve } from "path"
import { defineConfig } from "vite"
import Components from "unplugin-vue-components/vite"
import { MarkdownTransform } from "./.vitepress/plugins/markdownTransform"

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
    fs: {
      allow: [resolve(__dirname, "..")],
    },
  },

  plugins: [
    MarkdownTransform(),
    Components({
      include: [/\.vue/, /\.md/],
      dirs: ".vitepress/components",
      dts: ".vitepress/components.d.ts",
    }),
  ],

  css: { preprocessorOptions: { scss: { charset: false } } },
})
