import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'
import morgan from 'morgan'

const app = express()

dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Api Rodando na porta ${PORT}`)
})

export default app
