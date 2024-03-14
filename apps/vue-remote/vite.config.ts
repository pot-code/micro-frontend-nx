/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vue-remote',

  server: {
    port: 4201,
    host: 'localhost',
  },

  preview: {
    port: 4201,
    host: 'localhost',
  },

  plugins: [
    vue(),
    nxViteTsPaths(),
    federation({
      name: 'vue-remote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/app/App.vue',
      },
      shared: ['vue'],
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    target: 'esnext',
    outDir: '../../dist/apps/vue-remote',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
