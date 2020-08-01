import express from 'express'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/')

app.listen(PORT, () => {
  console.log(`Api Rodando na porta ${PORT}`)
})

export default app
