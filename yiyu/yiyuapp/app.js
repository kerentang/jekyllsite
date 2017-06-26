const Koa = require('koa');
const app = new Koa();
// const router = require('koa-router')();
const json = require('koa-json');
const logger = require('koa-logger'); // 引入各种依赖

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(async function (ctx, next) {
  let start = new Date();
  await next();
  let ms = new Date() - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms); // 显示执行的时间
});

app.on('error', function (err, ctx) {
  console.log('server error', err);
});

app.listen(9000, () => {
  console.log('Koa is listening in 9000');
});

module.exports = app;
