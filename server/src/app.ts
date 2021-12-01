import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import * as dotenv from 'dotenv'
import authRouter from './routes/auth'

dotenv.config()

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong!')
})

export default app
