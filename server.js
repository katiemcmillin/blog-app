import express from 'express'
import logger from 'morgan'
import cors from "cors"

const PORT = process.env.PORT || 3000

import db from './db/connection.js'
import Post from './models/post.js'

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

db.on('connected', () => {
  console.log('Connected to MongoDB!')
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`)
  )
})
