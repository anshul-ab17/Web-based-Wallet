import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: "/Web-based-Wallet/",
  plugins: [svelte(), nodePolyfills()],
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
})
