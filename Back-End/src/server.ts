import 'dotenv/config'
import express, { json } from 'express'

const app = express()

app.use(json())



app.listen(process.env.PORT)
console.log(`Starting for http://localhost${process.env.PORT}`)