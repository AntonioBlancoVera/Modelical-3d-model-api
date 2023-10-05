import { Model } from "../types/model"
import * as fs from 'fs'

export let arrayModels = [] as Model[]

export class ModelAccess {
    private filePath = 'models.json'

    constructor() {
        this.loadModelsFromFile()
    }

    private saveModelsToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(arrayModels))
    }

    private loadModelsFromFile() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8')
            arrayModels = JSON.parse(data)
        } catch (error) {
            arrayModels = []
        }
    }

    async getAllModels(): Promise<Model[]> {
        return arrayModels
    }

    async getModelById(id: string): Promise<Model | undefined> {
        const model = arrayModels.find((model) => model.id === id)
        return model
    }

    async getAllModelsByProjectId(projectId: string): Promise<Model[]> {
        console.log(projectId);
        
        return arrayModels.filter((model) => model.projectId === projectId);
    }  

    async createModel(newModel: Model): Promise<Model> {
        arrayModels.push(newModel)
        this.saveModelsToFile()
        return newModel
    }

    async updateModel(modelToUpdated: Model): Promise<Model | null> {
        const index = arrayModels.findIndex((model) => model.id === modelToUpdated.id)
        if (index === -1) {
            return null
        }
        arrayModels[index] = { ...arrayModels[index], ...modelToUpdated };
        this.saveModelsToFile();

        return arrayModels[index];
    }

    async deleteModel(id: string): Promise<boolean> {
        const firstSize = arrayModels.length
        arrayModels = arrayModels.filter((model) => model.id !== id)
        if (firstSize !== arrayModels.length) {
            this.saveModelsToFile()
            return true
        } else {
            return false
        }
    }
}
