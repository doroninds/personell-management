import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import env from '../src/config/env.js'
import db from './config/db.js'
import logger from './config/logger.js'
import middlewares from './middlewares/index.js'
import router from './network/routers/index.js'
import services from './services/index.js'

const port = env.APP_PORT
const app = new Koa()

app.use(bodyParser())
app.use(middlewares.jsonapi)
app.use(router.routes())

app.context.services = services({ db })

app.listen(port, () => {
  logger.info(`🚀 Start listen server: http://localhost:${port}`)
})

export default app