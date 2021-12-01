import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import * as dotenv from 'dotenv'
import authRoutes from './routes/auth'

dotenv.config()

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong!')
})
app.use('/auth', authRoutes)

export default app
