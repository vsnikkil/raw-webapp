const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const send = require('koa-send')

app.use(async function (ctx, next) {
  if (!await send(ctx, ctx.path === '/' ? 'index.html' : ctx.path, { root: `${__dirname}/static` })) {
    await next()
  }
})

app.listen(3030)

