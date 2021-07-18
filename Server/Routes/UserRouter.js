const express = require('express');
const router = express.Router()
const {DataValidation} = require('../Middlewares/DataValidation')
const UserController = require('../Controllers/UserController')

router.post('/register',DataValidation,UserController.registerCandidate)
router.post('/register',DataValidation,UserController.registerRecruiter)
router.post('/login',DataValidation,UserController.loginUser)


module.exports = router