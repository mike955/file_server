import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as jwt from 'koa-jwt';
import * as bodyParser from 'koa-bodyparser';


import router from './router';


const app = new Koa();

app
  .use(bodyParser({
    enableTypes: ['json', 'form'],
    encode: 'utf-8',
    formLimit: '512m',
  }))
  .use(serve(__dirname + '../..' + '/public'))
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3001, () => {
  console.log('server start 3001')
})