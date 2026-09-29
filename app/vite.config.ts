import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const isProd = mode === 'production';

  return {
    plugins: [
      react(), 
      tailwindcss(),
      // Automated Asset Compression Engine
      ViteImageOptimizer({
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        png: { quality: 85 },
        webp: { lossless: false, quality: 80 },
        svg: {
          plugins: [
            { name: 'removeViewBox', active: false },
            { name: 'sortAttrs' },
          ],
        },
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      target: 'es2022', 
      minify: 'esbuild', 
      cssCodeSplit: true,
      assetsInlineLimit: 4096, 
      sourcemap: false,        
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['motion/react'],
            'vendor-icons': ['lucide-react'],
          },
        },
      },
    },
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
      legalComments: 'none',
    },
  };
});