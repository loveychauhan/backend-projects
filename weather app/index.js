import express from 'express'
import appRouter from './route/route.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'


const __fileName = fileURLToPath(import.meta.url)

const __dirname = dirname(__fileName)

const app = express()
app.use(express.static(__dirname))
app.set('view engine', 'ejs')
app.use(appRouter)

app.listen(5000, () => {
    console.log('server is running at 5000')
})