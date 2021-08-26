const express = require('express');
const router = express.Router()
const ApplyController = require('../Controllers/ApplyController')
const {TokenVerification} = require('../Middlewares/PostMiddlewares')


router.get('/MyApply',TokenVerification,ApplyController.getMyApply)
router.get('/ApplyReceived',TokenVerification,ApplyController.getApplybyRecruiter)

module.exports = router
