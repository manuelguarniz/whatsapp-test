const express = require('express')
const routes = express.Router()

const controller = require('../controllers/whatsapp.controller')
const { simpleMessageValidator } = require('../middleware/validators/simple-message.validator')

routes.get('/webhook', controller.verifyToken)
routes.post('/webhook', controller.receivedMessage)
routes.post('/simpleMessage', simpleMessageValidator, controller.simpleMessage)

module.exports = routes