import { Project } from "../types/project"
import * as fs from 'fs'

export let arrayProjects = [] as Project[]

export class ProjectAccess {
    private filePath = 'projects.json'

    constructor() {
        this.loadProjectsFromFile()
    }

    private saveProjectsToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(arrayProjects))
    }

    private loadProjectsFromFile() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8')
            arrayProjects = JSON.parse(data)
        } catch (error) {
            arrayProjects = []
        }
    }

    async getAllProjects(): Promise<Project[]> {
        return arrayProjects
    }

    async getProjectById(id: string): Promise<Project | undefined> {
        const project = arrayProjects.find((project) => project.id === id)
        return project
    }

    async createProject(newProject: Project): Promise<Project> {
        arrayProjects.push(newProject)
        this.saveProjectsToFile()
        return newProject
    }

    async updateProject(projectToUpdated: Project): Promise<Project | null> {
        const index = arrayProjects.findIndex((project) => project.id === projectToUpdated.id)
        if (index === -1) {
            return null
        }
        arrayProjects[index] = { ...arrayProjects[index], ...projectToUpdated };
        this.saveProjectsToFile();

        return arrayProjects[index];
    }

    async deleteProject(id: string): Promise<boolean> {
        const firstSize = arrayProjects.length
        arrayProjects = arrayProjects.filter((project) => project.id !== id)
        if (firstSize !== arrayProjects.length) {
            this.saveProjectsToFile()
            return true
        } else {
            return false
        }
    }
}
