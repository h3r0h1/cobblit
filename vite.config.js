import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        verkooppunten: resolve(__dirname, 'verkooppunten.html'),
        stappenplan: resolve(__dirname, 'stappenplan.html'),
        producten: resolve(__dirname, 'producten.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
