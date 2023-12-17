const express = require('express')
const apiRoutes = require('./routes/whatsapp')
const settingRoutes = require('./routes/setting')
const app = express()
const routes = express.Router()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/whatsapp', apiRoutes)
app.use('/', settingRoutes)

app.listen(PORT, () => console.log(`Running in port: ${PORT} ...`))
