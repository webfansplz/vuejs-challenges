import { getParameters } from 'codesandbox/lib/api/define';
import { CODESANDBOX_URL } from '../configs';
import { appVue, indexHtml, mainTs, packageJson, tsconfigJson, tsconfigNodeJson, viteConfigTs } from './template';

export function normalizeCodesandboxLink(files: Record<string, string>) {
  const iFiles = {}

  for (let key of Object.keys(files)) {
    iFiles[`src/${key}`] = {
      content: files[key],
      isBinary: false
    }
  }

  const parameters = getParameters({
    files: {
      'index.html': {
        content: indexHtml,
        isBinary: false
      },
      'src/main.ts': {
        content: mainTs,
        isBinary: false
      },
      'src/App.vue': {
        content: appVue,
        isBinary: false
      },
      'package.json': {
        content: JSON.stringify(packageJson, null, 2),
        isBinary: false
      },
      'vite.config.ts': {
        content: viteConfigTs,
        isBinary: false
      },
      'tsconfig.json': {
        content: JSON.stringify(tsconfigJson, null, 2),
        isBinary: false
      },
      'tsconfig.node.json': {
        content: JSON.stringify(tsconfigNodeJson, null, 2),
        isBinary: false
      },
      ...iFiles
    },
  });

  const url = `${CODESANDBOX_URL}api/v1/sandboxes/define?parameters=${parameters}`;
  return url
}
