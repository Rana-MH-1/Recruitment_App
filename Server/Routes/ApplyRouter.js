const express = require('express');
const router = express.Router()
const ApplyController = require('../Controllers/ApplyController')
const {TokenVerification} = require('../Middlewares/PostMiddlewares')


router.get('/AllApply',ApplyController.getAllApply)
router.get('/MyApply',TokenVerification,ApplyController.getMyApply)

module.exports = router