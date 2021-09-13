const express = require('express');
const router = express.Router()
const {DataValidationLogin,DataValidationRegister} = require('../Middlewares/DataValidation')
const UserController = require('../Controllers/UserController');
const { TokenVerification } = require('../Middlewares/PostMiddlewares');

router.post('/register',DataValidationRegister,UserController.registerCandidate)
router.post('/register',DataValidationRegister,UserController.registerRecruiter)
router.post('/login',DataValidationLogin,UserController.loginUser)
router.get('/getDataUser',TokenVerification,UserController.getDataUser)
router.put('/editProfile/:id',TokenVerification,UserController.EditProfile)


module.exports = router