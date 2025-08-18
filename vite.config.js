import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  plugins: [
    react({
      // Add this to handle JSX in .js files
      jsxImportSource: 'react',
      include: '**/*.{js,jsx,ts,tsx}',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/Components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@store': path.resolve(__dirname, './src/Store'),
      '@contexts': path.resolve(__dirname, './src/Contexts'),
      '@hooks': path.resolve(__dirname, './src/hooks')
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          redux: ['redux', 'react-redux'],
          router: ['react-router-dom'],
          i18n: ['i18next', 'react-i18next']
        }
      }
    }
  },
  define: {
    global: 'globalThis',
    'process.env': {}
  },
  esbuild: {
    // This will handle JSX in .js files
    loader: 'jsx',
    include: /src\/.*\.(js|jsx)$/,
    exclude: []
  }
})