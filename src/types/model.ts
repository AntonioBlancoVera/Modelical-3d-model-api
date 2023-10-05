export interface Model {
    id: string,
    projectId: string,
    name: string,
    description: string
}

export interface CreateModelRequest {
    name: string,
    projectId: string,
    description: string
}