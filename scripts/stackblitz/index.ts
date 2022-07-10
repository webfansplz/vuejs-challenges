import { STACKBLITZ_PLAYGROUND_URL } from "../configs"
import template from "./template"
export interface StackBlitzPayloadOptions {
  title: string
  files: Record<string, string>
  openFile: string
}

export function normalizePayload(payload: StackBlitzPayloadOptions) {
  return {
    openFile: payload.openFile,
    files: {
      "package.json": template.packageJSONContent,
      "package-lock.json": template.lock,
      "vite.config.ts": template.viteConfigContenet,
      "main.ts": template.mainTsContent,
      "index.html": template.indexHtmlContent,
      "env.d.ts": template.envTsContent,
      ...payload.files,
    },
    title: payload.title,
    description: payload.title,
    template: "node",
  }
}

function serialize(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}

export function normalizeStackBlitzLink(payload: StackBlitzPayloadOptions) {
  return `${STACKBLITZ_PLAYGROUND_URL}#${serialize(JSON.stringify(normalizePayload(payload)))}`
}
