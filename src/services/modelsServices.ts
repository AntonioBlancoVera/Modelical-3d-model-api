import { ModelAccess } from "../dataLayer/modelsAccess"
import { CreateModelRequest, Model } from "../types/model"
import { v4 as uuidv4 } from 'uuid'


const modelsAccess = new ModelAccess()


export const getAllModels = async (): Promise<Model[]> => {
    const models = await modelsAccess.getAllModels()
    return models
}

export const getModelById = async (id: string): Promise<Model | undefined> => {
    const models = await modelsAccess.getModelById(id)
    return models
}

export const getAllModelsByProjectId = async (projectId: string): Promise<Model[] | undefined> => {
    const models = await modelsAccess.getAllModelsByProjectId(projectId)
    return models
}

export const createModel = async (object: CreateModelRequest): Promise<Model> => {
    const id = uuidv4() // Generar un UUID único como ID

    const newModel: Model = {
        id,
        name: object.name,
        description: object.description,
        projectId: object.projectId
    }

    const modelCreated = await modelsAccess.createModel(newModel)
    return modelCreated
}

export const updateModel = async (object: Model): Promise<Model | null> => {

    const modelToUpdated: Model = {
        id: object.id,
        name: object.name,
        description: object.description,
        projectId: object.projectId
    }

    const modelUpdated = await modelsAccess.updateModel(modelToUpdated)
    return modelUpdated
}

export const deleteModel = async (id: string): Promise<boolean> => {
    const modelDeleted = await modelsAccess.deleteModel(id)
    return modelDeleted
}