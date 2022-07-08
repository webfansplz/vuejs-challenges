const packageJSONContent = JSON.stringify({
  scripts: {
    "test": "vitest --environment jsdom",
    "test:ui": "vitest --environment jsdom --ui",
    "dev": "vite",
    "init": "concurrently \"npm run dev\" \"npm run test\" ",
  },
  stackblitz: {
    startCommand: "npm run init",
  },
  dependencies: {
    vue: "^3.2.37",
  },
  devDependencies: {
    "@types/jsdom": "^16.2.14",
    "@vitejs/plugin-vue": "^2.3.3",
    "@vitest/ui": "^0.17.0",
    "@vue/test-utils": "^2.0.2",
    "jsdom": "^20.0.0",
    "vite": "^2.9.13",
    "typescript": "^4.7.4",
    "vite-plugin-vue-inspector": "1.0.1",
    "vitest": "^0.17.0",
    "concurrently": "^7.2.2",
  },
})

const viteConfigContenet = `
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Inspector from 'vite-plugin-vue-inspector';

export default defineConfig({
  plugins: [
    vue(),
    Inspector({
      enabled: true,
    }),
  ],
});
`

const mainTsContent = `
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
`

const indexHtmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.ts"></script>
  </body>
</html>
`

const envTsContent = `
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
`
export default {
  packageJSONContent,
  viteConfigContenet,
  mainTsContent,
  indexHtmlContent,
  envTsContent,
}
