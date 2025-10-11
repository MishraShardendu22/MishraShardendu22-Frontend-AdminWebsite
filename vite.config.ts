import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [preact(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api/proxy': {
          target: env.VITE_BACKEND_1 || 'https://portfolio-backend-1p9d.onrender.com',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api\/proxy/, '/api'),
          configure: (proxy: any, _options: any) => {
            proxy.on('error', (err: any, _req: any, _res: any) => {
              console.log('proxy error', err)
            })
            proxy.on('proxyReq', (_proxyReq: any, req: any, _res: any) => {
              console.log('Sending Request to the Target:', req.method, req.url)
            })
            proxy.on('proxyRes', (proxyRes: any, req: any, _res: any) => {
              console.log('Received Response from the Target:', proxyRes.statusCode, req.url)
            })
          },
        },
      },
    },
    base: '/vc-ap-mishrashardendu22-admin/',
  }
})
