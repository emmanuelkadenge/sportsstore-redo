const path = require('path')
const express = require('express')
const router = express.Router()
const sportsController = require('../controllers/sports')

router.get('/add-sport',sportsController.addSportsController)
router.post('/view-sport',sportsController.viewSportsController)

module.exports = router
