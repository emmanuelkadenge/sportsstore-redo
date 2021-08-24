const path = require('path')
const express = require('express')
const router =  express.Router()
const coachController = require('../controllers/coach')

router.get('/add-coach',coachController.addCoachController)

router.post('/view-coach',coachController.viewCoachController)

module.exports = router