import express from 'express'
import modelsRouter from './routes/models'
import projectsRouter from './routes/projects'

const app = express()

app.use(express.json())

const PORT = 3000
app.listen(PORT,()=>{console.log(`Server runnning on port ${PORT}`)
})

app.use('/models', modelsRouter)
app.use('/projects', projectsRouter)

