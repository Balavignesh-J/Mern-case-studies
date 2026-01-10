import express from 'express'
import { router } from './routes/route'

const app = express()

app.listen(3000)

app.use(router)