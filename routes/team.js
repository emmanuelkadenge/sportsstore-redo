const path = require('path')
const express = require('express')
const router = express.Router()
const teamController = require('../controllers/team')

router.get('/add-team',teamController.addTeamController)

router.post('/view-team',teamController.viewTeamController)

module.exports = router