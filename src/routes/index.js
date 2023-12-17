const express = require('express')
const routes = express.Router()

const whatsappController = require('./../controllers/whatsapp.controller')

routes.get('/', whatsappController.verifyToken)
routes.post('/', whatsappController.receivedMessage)

module.exports = routes