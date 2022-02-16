import { createProxyMiddleware } from "http-proxy-middleware"

import type { IncomingMessage, ServerResponse } from 'http'

const middleware = createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true,
  ws: true,
})

export default function (
  req: IncomingMessage,
  res: ServerResponse,
  next: Function
) {
  console.log(`calling ${req.url}`)
  if (!req.url.startsWith("/api/v1")) return next()
  console.log("calling mw")
  middleware(req, res, next)
}
