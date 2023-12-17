const express = require('express')
const routes = express.Router()

const whatsappController = require('../controllers/whatsapp.controller')

routes.get('/', whatsappController.verifyToken)
routes.post('/', whatsappController.receivedMessage)
routes.get('/health', whatsappController.health)

module.exports = routes