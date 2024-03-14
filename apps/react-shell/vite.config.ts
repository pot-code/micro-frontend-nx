/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';
import pkg from '../../package.json';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/react-shell',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    federation({
      name: 'react-shell',
      filename: 'remoteEntry.js',
      remotes: {
        'vue-remote': 'http://localhost:4201/assets/remoteEntry.js',
        'react-remote': 'http://localhost:4202/assets/remoteEntry.js',
      },
      shared: {
        ...pkg.dependencies,
      },
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    emptyOutDir: true,
    target: 'esnext',
    outDir: '../../dist/apps/react-shell',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/react-shell',
      provider: 'v8',
    },
  },
});
