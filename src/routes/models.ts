import express from 'express'
import * as modelsServices from '../services/modelsServices'
import { httpResponse } from '../utils/http'


const router = express.Router()

router.get('/', async (_req: any, res: any) => {
    const models = await modelsServices.getAllModels()
    res.send((httpResponse(models)))
})

router.get('/:id', async (req: any, res: any) => {
    const models = await modelsServices.getModelById(req.params.id)
    res.send((httpResponse(models)))
})

router.get('/getAllModelsByProjectId/:projectid', async (req: any, res: any) => {
    console.log(1);
    
    const models = await modelsServices.getAllModelsByProjectId(req.params.projectid)
    res.send((httpResponse(models)))
})

router.post('/', async (req: any, res: any) => {
    const models = await modelsServices.createModel(req.body)
    res.send((httpResponse(models)))
})

router.put('/', async (req: any, res: any) => {
    const models = await modelsServices.updateModel(req.body)
    res.send((httpResponse(models)))
})

router.delete('/:id', async (req: any, res: any) => {
    const models = await modelsServices.deleteModel(req.params.id)
    res.send((httpResponse(models)))
})

export default router