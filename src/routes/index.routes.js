import {Router} from 'express'
import * as indexController from '../controllers/index.controller'
const router = Router()

router.get('/about', indexController.getAboutInfo)

export default router