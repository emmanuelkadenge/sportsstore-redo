const path = require('path')
const express = require('express')
const router = express.Router()
const fieldController = require('../controllers/fields')

router.get('/add-field',fieldController.addFieldController)

router.post('/view-player',fieldController.viewFieldController)

module.exports = router