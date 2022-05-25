import express from 'express'
import projectsRouter from './routes/projects'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.get('/', (_req, res) => {
  res.send('welcome to the projects api')
})

app.use('/projects', projectsRouter)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
