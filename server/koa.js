const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const db = require('./db');

app.use(bodyParser());

router.post('/authorization', function (ctx, next) {
    db.createUser(ctx.request.body.login, ctx.request.body.password);

    ctx.body = {login: ctx.request.body.login, password: ctx.request.body.password};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080);
