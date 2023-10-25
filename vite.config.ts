import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [
        resolve(process.cwd(), 'src/assets/icons')
      ],
      // 指定symbolId格式
      symbolId: 'svg-[name]',
      // 禁用压缩 否则想要修改无状态组件的stroke或者fill会影响到预设样式 例如stroke-width
      svgoOptions: false,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js' // 开启运行时编译
    }
  }
})
