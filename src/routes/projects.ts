import express from 'express'
import * as projectsServices from '../services/projectsServices'
import { httpResponse } from '../utils/http'


const router = express.Router()

router.get('/', async (_req: any, res: any) => {
    const projects = await projectsServices.getAllProjects()
    res.send((httpResponse(projects)))
})

router.get('/:id', async (req: any, res: any) => {
    const projects = await projectsServices.getProjectById(req.params.id)
    res.send((httpResponse(projects)))
})

router.post('/', async (req: any, res: any) => {
    const projects = await projectsServices.createProject(req.body)
    res.send((httpResponse(projects)))
})

router.put('/', async (req: any, res: any) => {
    const projects = await projectsServices.updateProject(req.body)
    res.send((httpResponse(projects)))
})

router.delete('/:id', async (req: any, res: any) => {
    const projects = await projectsServices.deleteProject(req.params.id)
    res.send((httpResponse(projects)))
})

export default router