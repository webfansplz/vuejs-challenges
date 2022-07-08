import { STACKBLITZ_PLAYGROUND_URL } from "../scripts/configs"
export interface StackBlitzPayloadOptions {
  title: string
  files: Record<string, string>
  openFile: string
}

export function normalizePayload(payload: StackBlitzPayloadOptions) {
  return {
    openFile: payload.openFile,
    files: {
      "package.json": JSON.stringify({
        scripts: {
          test: "vitest --environment jsdom --ui",
        },
        stackblitz: {
          startCommand: "npm run test",
        },
        dependencies: {
          "typescript": "^4.7.4",
          "vitest": "^0.17.0",
          "vue": "^3.2.37",
          "vite-plugin-vue-inspector": "1.0.1",
          "@types/jsdom": "^16.2.14",
          "@vitejs/plugin-vue": "^2.3.3",
          "@vitest/ui": "^0.17.0",
          "@vue/test-utils": "^2.0.2",
          "jsdom": "^20.0.0",
        },
      }),
      "vitest.config.ts": `
        import { defineConfig } from "vitest/config"
        import vue from "@vitejs/plugin-vue"

        export default defineConfig({
          plugins: [vue()],
        })
      `,
      ...payload.files,
    },
    title: payload.title,
    description: payload.title,
    template: "node",
    dependencies: {
      "typescript": "^4.7.4",
      "vitest": "^0.17.0",
      "vue": "^3.2.37",
      "@types/jsdom": "^16.2.14",
      "@vitejs/plugin-vue": "^2.3.3",
      "@vitest/ui": "^0.17.0",
      "@vue/test-utils": "^2.0.2",
      "jsdom": "^20.0.0",
    },
  }
}

function serialize(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}

export function normalizeStackBlitzLink(payload: StackBlitzPayloadOptions) {
  return `${STACKBLITZ_PLAYGROUND_URL}#${serialize(JSON.stringify(normalizePayload(payload)))}`
}
