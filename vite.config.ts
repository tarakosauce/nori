import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components(),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core'
      ],
      dirs: [
        './src/composable'
      ],
      vueTemplate: true
    }),
    UnoCSS({
      shortcuts: {
        'border-base': "border-gray/15"
      },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    }),
  ]
})

