const express = require('express');
const router = express.Router()
const {DataValidation} = require('../Middlewares/DataValidation')
const Controllers = require('../Controllers/CandidateController')

router.post('/register',DataValidation,Controllers.registerCandidate)

module.exports = router