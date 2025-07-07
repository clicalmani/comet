import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tonka from 'tonka-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
      outDir: "dist",
      assetsDir: "assets",
      rollupOptions: {
        input: {
            app: "resources/js/main.ts",
        }
      }
  },
  plugins: [
    vue(), tonka()
  ],
  resolve: {
  alias: {
      '@': fileURLToPath(new URL('./resources/js', import.meta.url))
  }
}
})
