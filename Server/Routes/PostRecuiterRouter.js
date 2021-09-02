const express = require('express');
const router = express.Router()
const {TokenVerification} = require('../Middlewares/PostMiddlewares')
const {checkPostOwner} = require('../Middlewares/PostMiddlewares')
const PostRecruiterControllers = require('../Controllers/PostRecruiterControllers')   
const {DataPostValidation} = require('../Middlewares/DataValidation')



router.post('/postReruiter',TokenVerification,DataPostValidation,PostRecruiterControllers.AddPost)
router.get('/AllPosts',PostRecruiterControllers.getAllPosts)
router.get('/MyPosts',TokenVerification,PostRecruiterControllers.getMyPosts)
router.put('/EditPosts/:id',TokenVerification,checkPostOwner,PostRecruiterControllers.EditPost)
router.delete('/DeletePost/:id',TokenVerification,checkPostOwner,PostRecruiterControllers.DeletePost)
router.get('/postCount',PostRecruiterControllers.getPostsCount)

module.exports = router