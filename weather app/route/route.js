import express from 'express'
import { home } from '../controller/user.js'

const appRouter = express.Router()

appRouter.get('/', home)

export default appRouter