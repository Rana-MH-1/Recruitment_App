const express = require('express');
const router = express.Router()
const {DataValidationLogin,DataValidationRegister,DataValidationCandidate} = require('../Middlewares/DataValidation')
const UserController = require('../Controllers/UserController');
const { TokenVerification } = require('../Middlewares/PostMiddlewares');

router.post('/register',DataValidationCandidate,UserController.registerCandidate)
router.post('/register',DataValidationRegister,UserController.registerRecruiter)
router.post('/login',DataValidationLogin,UserController.loginUser)
router.get('/getDataUser',TokenVerification,UserController.getDataUser)


module.exports = router