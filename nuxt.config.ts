import { defineNuxtConfig } from 'nuxt3'
import { createProxyMiddleware } from 'http-proxy-middleware'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    serverMiddleware: [
    {
      path: '/api/v1',
      handler: createProxyMiddleware({
        target: 'http://localhost:8000',
        changeOrigin: true,
        ws: true,
      }),
    },
  ],
})
