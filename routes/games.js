const path = require('path')
const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/games')

router.get('/add-game',gamesController.addGameController)

router.post('/view-game',gamesController.viewGameController)

module.exports = router
