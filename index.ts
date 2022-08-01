import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// configuration the .env
dotenv.config()

// Create express APP
const app: Express = express()
const port: string | number = process.env.PORT || 8000

// Define the first Route of App
app.get('/', (req: Request, res: Response) => {
  // Send Hello world
  res.send('Welcome to App Express + TS + SWAGGER')
})

// Define the second Route of App
app.get('/hello', (req: Request, res: Response) => {
  // Send Hello world
  res.send('Welcome to Hello!')
})

// Execute APP and listen requests to port

app.listen(port, () =>
  console.log(`Express Server: Running at http://localhost:${port}`)
)
