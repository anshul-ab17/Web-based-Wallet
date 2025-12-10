import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: "/Web-based-Wallet/",
  define: { global: "globalThis" },
  plugins: [svelte(), nodePolyfills({ protocolImports: true })],
  resolve: { alias: { buffer: "buffer" } },
})
