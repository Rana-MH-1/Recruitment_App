const express = require('express');
const router = express.Router()
const {TokenVerification} = require('../Middlewares/PostMiddlewares')
const {checkPostOwner} = require('../Middlewares/PostMiddlewares')
const PostRecruiterControllers = require('../Controllers/PostRecruiterControllers')   


router.post('/postReruiter',TokenVerification,PostRecruiterControllers.AddPost)

module.exports = router