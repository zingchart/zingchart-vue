import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/ZingChart.vue'),
      name: 'ZingChart',
      fileName: (format) => `zingchartVue3.${format}.min.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'cjs',
        },
        {
          format: 'umd',
          name: 'zingchartVue3',
        },
      ]
    },
  },
  plugins: [vue()],
});