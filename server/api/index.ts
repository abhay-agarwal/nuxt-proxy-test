import { createProxyMiddleware } from "http-proxy-middleware"

import type { IncomingMessage, ServerResponse } from 'http'


export default async (
  req: IncomingMessage,
  res: ServerResponse,
  next: Function
) => {
  console.log(`called ${req.url}`)

  return "hi!!!"
}
