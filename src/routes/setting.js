const express = require('express')
const routes = express.Router()

const settingController = require('./../controllers/setting.controller')

routes.get('/health', settingController.health)

module.exports = routes