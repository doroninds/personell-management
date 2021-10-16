import Router from '@koa/router'
import { APP_NAME } from '../../config/constants.js'
import staffRouter from './staffRouter.js'


const router = new Router()

router.get('/', ctx => {
    ctx.body = APP_NAME
})

router.get('/.health-check', ctx => {
    ctx.body = { status: 'UP' }
})

router.use('/staff', staffRouter.routes())



router.allowedMethods()


export default router