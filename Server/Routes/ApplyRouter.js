const express = require('express');
const router = express.Router()
const ApplyController = require('../Controllers/ApplyController')
const {TokenVerification} = require('../Middlewares/PostMiddlewares')


router.get('/MyApply',TokenVerification,ApplyController.getMyApply)
router.get('/ApplyReceived',TokenVerification,ApplyController.getApplybyRecruiter)
router.get('/countMyApplies',TokenVerification,ApplyController.CountMyApplies)

module.exports = router
