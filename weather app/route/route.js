import express from 'express'
import { getWeather, home } from '../controller/user.js'

const appRouter = express.Router()

appRouter.get('/', home)
appRouter.get('/weather', getWeather)

export default appRouter