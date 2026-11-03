import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'jsx-in-js-files',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.includes('/src/') || !id.endsWith('.js')) return null
        const result = await transformWithOxc(code, `${id}.jsx`, { jsx: { runtime: 'automatic' } })
        return { code: result.code, map: result.map }
      },
    },
    react({ include: /\.(jsx|js)$/ }),
  ],
})
