import { STACKBLITZ_PLAYGROUND_URL } from "../scripts/configs"
import stackblizContent from "../scripts/stackblizContent"
export interface StackBlitzPayloadOptions {
  title: string
  files: Record<string, string>
  openFile: string
}

export function normalizePayload(payload: StackBlitzPayloadOptions) {
  return {
    openFile: payload.openFile,
    files: {
      "package.json": stackblizContent.packageJSONContent,
      "vite.config.ts": stackblizContent.viteConfigContenet,
      "main.ts": stackblizContent.mainTsContent,
      "index.html": stackblizContent.indexHtmlContent,
      "env.d.ts": stackblizContent.envTsContent,
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
