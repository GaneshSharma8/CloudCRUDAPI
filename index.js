const express = require("express")
const app = express()
const uploadRouter = require('./routes/upload.routes')
const port = 9000
require('dotenv').config()

app.use(express.json())
app.use('/upload', uploadRouter)

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})