const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const auth = require('./server/routes/auth.js')
const bodyparser = require('koa-bodyparser')

app.use(bodyparser())
app.use(json())
app.use(logger())

app.use(async function (ctx, next) {
  let start = new Date();
  await next();
  let ms = new Date() - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

app.on('error', function (err, ctx) {
  console.log(`server error`, err)
})
router.use('/auth', auth.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(8889, () => {
  console.log('koa is listening in 8889')
})

module.exports = app
