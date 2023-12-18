const serverless = require('serverless-http');
const express = require('express')
const apiRoutes = require('./routes/whatsapp')
const settingRoutes = require('./routes/setting')
const dotenv = require('dotenv').config();
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/', settingRoutes)
app.use('/whatsapp', apiRoutes)

console.log('env-dev: ', process.env.IS_DEVELOP || 'No')
if (process.env.IS_DEVELOP) {
  app.listen(PORT, () => console.log(`Running in port: ${PORT} ...`))
}

module.exports.handler = serverless(app);
