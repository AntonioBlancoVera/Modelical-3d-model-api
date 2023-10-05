import { HttpResponse } from "../types/http"

export const httpResponse = (data: any, status: string = 'OK') => {
    
    let httpResponse = {
        status,
        data
    } as HttpResponse
    
    return httpResponse
}