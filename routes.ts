import { Router } from 'express'
import { CreateTagController } from './src/controllers/CreateTagController'
import { CreateUserControllers } from './src/controllers/CreateUserControllers'
import { ensureAdmin } from './src/middleware/ensureAdmin'

const router = Router()

const createUserController = new CreateUserControllers()
const createTagController = new CreateTagController()

router.post('/users', createUserController.handle)

router.post('/tags', ensureAdmin, createTagController.handle)

export { router }