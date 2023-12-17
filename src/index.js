const express = require('express')
const apiRoutes = require('./routes')
const app = express()
const routes = express.Router()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/whatsapp', apiRoutes)

app.listen(PORT, () => console.log(`Running in port: ${PORT} ...`))
