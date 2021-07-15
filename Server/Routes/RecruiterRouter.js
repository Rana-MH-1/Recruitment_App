const express = require('express');
const router = express.Router()
const {DataValidationRecruiter} = require('../Middlewares/DataValidationRecruiter')
const Controllers= require('../Controllers/RecruiterController')

router.post('/register',DataValidationRecruiter,Controllers.registerRecruiter)

module.exports = router