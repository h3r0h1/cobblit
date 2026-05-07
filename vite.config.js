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
        // English
        'en/index': resolve(__dirname, 'en/index.html'),
        'en/verkooppunten': resolve(__dirname, 'en/verkooppunten.html'),
        'en/stappenplan': resolve(__dirname, 'en/stappenplan.html'),
        'en/producten': resolve(__dirname, 'en/producten.html'),
        'en/contact': resolve(__dirname, 'en/contact.html'),
        // German
        'de/index': resolve(__dirname, 'de/index.html'),
        'de/verkooppunten': resolve(__dirname, 'de/verkooppunten.html'),
        'de/stappenplan': resolve(__dirname, 'de/stappenplan.html'),
        'de/producten': resolve(__dirname, 'de/producten.html'),
        'de/contact': resolve(__dirname, 'de/contact.html'),
      },
    },
  },
})
