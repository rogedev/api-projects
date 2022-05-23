import projectsData from '../data/projects.json'
import { Project } from '../types'

const projects: Project[] = projectsData as Project[]

export const getProjects = (): Project[] => {
  return projects
}

export const getProject = (id: Number): Project | undefined => {
  const project = projects.find(project => project.id === id)
  return project
}

export const addProject = (project: Project): Project => {
  const newProject: Project = {
    // id: projects.length + 1,
    ...project
  }

  projects.push(newProject)
  return newProject
}

export const deleteteProject = (id: Number): Project | undefined => {
  const project = projects.find(project => project.id === id)
  if (project !== undefined) projects.splice(projects.indexOf(project), 1)
  return project
}
