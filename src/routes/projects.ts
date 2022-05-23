import express from 'express'
import * as projectsController from '../controllers/projectsController'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(projectsController.getProjects())
})

router.get('/:id', (req, res) => {
  const project = projectsController.getProject(+req.params.id)
  return (project != null) ? res.send(project) : res.status(404).send({ message: 'Project not found' })
})

router.post('/save', (req, res) => {
  res.send(projectsController.addProject(req.body))
})

router.delete('/delete/:id', (req, res) => {
  const project = projectsController.deleteteProject(+req.params.id)
  return project !== undefined ? res.send(project) : res.status(404).send({ message: 'Project not found' })
})

export default router
