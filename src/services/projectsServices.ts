import { ProjectAccess } from "../dataLayer/projectsAccess"
import { CreateProjectRequest, Project } from "../types/project"
import { v4 as uuidv4 } from 'uuid'


const projectsAccess = new ProjectAccess()


export const getAllProjects = async (): Promise<Project[]> => {
    const projects = await projectsAccess.getAllProjects()
    return projects
}

export const getProjectById = async (id: string): Promise<Project | undefined> => {
    const projects = await projectsAccess.getProjectById(id)
    return projects
}

export const createProject = async (object: CreateProjectRequest): Promise<Project> => {
    const id = uuidv4() // Generar un UUID único como ID

    const newProject: Project = {
        id,
        name: object.name,
        description: object.description,
    }

    const projectCreated = await projectsAccess.createProject(newProject)
    return projectCreated
}

export const updateProject = async (object: Project): Promise<Project | null> => {

    const projectToUpdated: Project = {
        id: object.id,
        name: object.name,
        description: object.description,
    }

    const projectUpdated = await projectsAccess.updateProject(projectToUpdated)
    return projectUpdated
}

export const deleteProject = async (id: string): Promise<boolean> => {
    const projectDeleted = await projectsAccess.deleteProject(id)
    return projectDeleted
}