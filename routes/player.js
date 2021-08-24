const path = require('path')
const express = require('express')
const router = express.Router()
const playerController = require('../controllers/players')

router.get('/add-player',playerController.addPlayerController)
router.post('/view-player',playerController.viewPlayerController)

module.exports = router