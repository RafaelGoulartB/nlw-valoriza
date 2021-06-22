import { Router } from 'express'
import { CreateUserControllers } from './src/controllers/CreateUserControllers'

const router = Router()

const createUserControllers = new CreateUserControllers()

router.post('/users', createUserControllers.handle)

export { router }