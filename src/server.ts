import 'reflect-metadata'
import express from 'express'
import { router } from '../routes'

import './database'

const app = express()

app.use(express.json())
app.use(router)

app.listen(3333, () => console.log(`Server is running at http://localhost:3333`))