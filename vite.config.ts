import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig as VitestUserConfig } from 'vitest/config'

const vitestConfig: VitestUserConfig = {
  test: {
    globals: true,
    environment: "jsdom",
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
})

