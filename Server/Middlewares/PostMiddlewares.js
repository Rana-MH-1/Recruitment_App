const jwt = require('jsonwebtoken')
require('dotenv').config({path:'./config/.env'})
const PostRecuiter=require('../Models/PostRecruiterSchema')

//verify that a token is valid
const TokenVerification =async(req,res,next)=>{
    try{
        const token = req.header("auth-token")
        if (!token)
            return res.status(401).json({ errors: [{ msg: 'Unauthorized operation !' }] })
        const payload = await jwt.verify(token,process.env.SECRET)
        console.log(process.env.SECRET)

        req.userId = payload.sub
        next()
    }
    catch{res.status(401).json({errors:[{msg:err.message}]})}
}

//to verify that the post is for the owner 
const checkPostOwner = async (req, res, next) => {
    try {
        const post = await PostRecuiter.findOne({ _id:req.params.id, owner: req.userId })
        if (!post)
            return res.status(401).json({ err: 'You are not authorized !' })
        next()
    }
    catch (err) {
        return res.status(401).json({ err: err })
    }
}


module.exports ={TokenVerification,checkPostOwner}