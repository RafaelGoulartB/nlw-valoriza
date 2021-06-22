import 'reflect-metadata'
import express from 'express'

import './database'

const app = express()

app.listen(3333, () => console.log(`Server is running at http://localhost:3333`))