import 'babel-polyfill'

import Koa from 'koa'
import Router from 'koa-router'
import send from 'koa-send'
import Debug from 'debug'

import serverConfig from './serverConfig'

const app = new Koa()
const debug = Debug('Server')

app.use(async function (ctx, next) {
  if (!await send(ctx, ctx.path === '/' ? 'index.html' : ctx.path, { root: `${__dirname}/static` })) {
    await next()
  }
})

const httpPort = serverConfig.httpPort || process.env.HTTP_PORT || ((defaultHttpPort) => {
  debug(`http port is not specified, defaulting to ${defaultHttpPort}`)
  return defaultHttpPort
})(3030)

app.listen(httpPort, () => {
  debug(`Listening to port ${httpPort}`)
})

