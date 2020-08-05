import 'dotenv/config'
import express, { json } from 'express'
import routes from './Routes'

const app = express()

app.use(json())

app.use(routes)

app.listen(process.env.PORT)
console.log(`Starting for http://localhost${process.env.PORT}`)