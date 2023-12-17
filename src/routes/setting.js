const express = require('express')
const routes = express.Router()

const settingController = require('./../controllers/setting.controller')

routes.get('/webhook', settingController.verifyToken)

module.exports = routes