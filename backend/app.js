import express from 'express'
import cors from 'cors'
import filesRouter from './src/routes/files.route.js'
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'ThreadMind API is running' })
})
app.use("/api/files",filesRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app