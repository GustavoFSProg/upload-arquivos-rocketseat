import express from 'express'
import RoutesList from './routes'
import dotenv from 'dotenv'
import morgan from 'morgan'
import mongoose from 'mongoose'
import path from 'path'

const app = express()

dotenv.config()

const conect = process.env.CONECTION_STRING

mongoose.connect(conect, {
  useNewUrlParser: true,
})

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
)

app.use('/', RoutesList)

app.listen(PORT, () => {
  console.log(`Api Rodando na porta ${PORT}`)
})

export default app
