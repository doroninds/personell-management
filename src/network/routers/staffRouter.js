import Router from '@koa/router'
import StaffController from '../controllers/StaffController.js'

const controller = new StaffController()

const staffRouter = new Router()

staffRouter.get('/', controller.find)
staffRouter.get('/:id', controller.get)
staffRouter.post('/', controller.create)
staffRouter.patch('/:id', controller.update)
staffRouter.delete('/:id', controller.delete)

staffRouter.allowedMethods()

export default staffRouter
