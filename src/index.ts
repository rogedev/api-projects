import express from 'express'
import projectsRouter from './routes/projects'
const app = express()

app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
  console.log('welcome to express')
  res.send('welcome to express')
})

app.use('/projects', projectsRouter)

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
