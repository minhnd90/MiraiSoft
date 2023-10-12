import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    vueJsx(),
    vuetify({ styles: { configFile: 'src/assets/vuetify.scss' } })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/MiraiSoft/' : '/'
})
