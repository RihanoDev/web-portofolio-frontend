import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    postcss: './postcss.config.cjs'
  },
  assetsInclude: ['**/*.pdf'],
  build: {
    // Mobile optimization
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          vendor: ['vue', 'vue-router'],
          icons: ['lucide-vue-next', '@fortawesome/fontawesome-free'],
          utils: ['aos']
        }
      }
    },
    // Reduce chunk size for mobile
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging but keep them small
    sourcemap: false
  },
  server: {
    host: true,
    port: 2002,
    strictPort: true,
    fs: {
      strict: false
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['vue', 'vue-router', 'lucide-vue-next'],
    exclude: ['@fortawesome/fontawesome-free']
  }
})
