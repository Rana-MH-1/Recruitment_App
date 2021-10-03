const candidate = require('../Models/UserSchema')
const recruiter = require('../Models/UserSchema')
const user = require('../Models/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
require('dotenv').config({path:'./config/.env'})
const cloudinary = require('../helpers/Cloudinary')

const registerCandidate = async (req, res) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const {FullName, Email, Password,image,LevelStudy,Specialty,Role,Profession,SocietyName,ActivityField,Category,taxRegistrationNumber} = req.body
        const candidatee = await candidate.findOne({ Email })
        if (candidatee)
            return res.status(400).json({ errors: [{ msg: 'User already exists !' }] })
        
        const newCandidate = new candidate({
            FullName,
            Email,
            Password,
            LevelStudy,
            Specialty,
            Profession,
            SocietyName,
            ActivityField,
            Category,
            taxRegistrationNumber,
            Role
        })

        //upload an image using cloudinary cloud----------------------------
        if (image){
            const savedImage = await cloudinary.uploader.upload(image, {
                timeout: 60000,
                upload_preset: "Recruitment_App"
            })
            newCandidate.image = {
                url: savedImage.url,
                public_id: savedImage.public_id
            }
        }

        
    //----------------------------------------------------------------------

        //cryptage of password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newCandidate.Password, salt)
        newCandidate.Password = hash
        
        //Token
        const registredCandidate = await newCandidate.save()
        const payload = {
            sub: registredCandidate._id
        }
        const data = process.env.SECRET
        console.log(data)
        const token = await jwt.sign(payload,data)
        res.json({ token })

    }
    catch{res.status(400).json({ errors: [{ msg: err.message }] })}
}

const registerRecruiter = async (req, res) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const {FullName, Email, Password,image,Profession,SocietyName,ActivityField,Category,taxRegistrationNumber,Role,LevelStudy,Specialty} = req.body
        const recruiterr = await recruiter.findOne({ Email })
        if (recruiterr)
            return res.status(400).json({ errors: [{ msg: 'User already exists !' }] })

        const newRecruiter = new recruiter({
            FullName,
            Email,
            Password,
            Profession,
            SocietyName,
            ActivityField,
            Category,
            taxRegistrationNumber,
            Role,
            LevelStudy,
            Specialty
        })

        //upload an image using cloudinary cloud----------------------------
        if (image){
            const savedImage = await cloudinary.uploader.upload(image, {
                timeout: 60000,
                upload_preset: "Recruitment_App"
            })
            newRecruiter.image = {
                url: savedImage.url,
                public_id: savedImage.public_id
            }
        }

       //----------------------------------------------------------------------

        //cryptage of password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newRecruiter.Password, salt)
        newRecruiter.Password = hash
        
        //Token
        const registredRecruiter = await newRecruiter.save()
        const payload = {
            sub: registredRecruiter._id
        }
        const data = process.env.SECRET
        console.log(data)
        const token = await jwt.sign(payload,data)
        res.json({ token })

    }
    catch{res.status(400).json({ errors: [{ msg: err.message }] })}
}

//login User
const loginUser = async (req, res) =>{
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
            
        const {Email, Password} = req.body;
        const Userr = await user.findOne({ Email })
        if (!Userr)
            return res.status(404).json({ errors: { message: 'The Email is Uncorrect' } })
            //compare between password(1) in req.body and in db 
            const isMatch = await bcrypt.compare(Password, Userr.Password)
        if (!isMatch)
            return res.status(404).json({ errors: { msg: 'The password is uncorrect' } })
        const payload = {
            sub: Userr._id
        }
        const token = await jwt.sign(payload, process.env.SECRET)
        res.json({token})
    }
    catch{res.status(400).json({ errors: [{ msg: err.message }] })}
}

//get data user
const getDataUser = async (req, res)=>{
    try {
        const User = await user.findById(req.userId).select({ Password: 0, __v: 0 })
        res.json(User)
    }
    catch (err) {
        res.status(400).json({ errors: [{ msg: err.message }] })
    }

}

const EditProfile = async(req, res)=>{
    try{
        const updatedProfile = await user.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(updatedProfile)
        console.log(updatedProfile)
    }
    catch{res.status(400).json({ err: err.message })}
}

const EditImageProfile = async(req, res)=>{
    try{
        const {Image,Public_id }= req.body
        
        //delete previous image
        cloudinary.uploader.destroy(Public_id)
        //upload image
        
        const savedImage = await cloudinary.uploader.upload(Image)

        const image={
            url:savedImage.url,
            public_id:Public_id,
        }
        
            const updatedProfileImg = await user.findByIdAndUpdate(req.params.id, {image} ,{new:true})
        res.json(updatedProfileImg)
    }
    catch{res.status(400).json({ err: err.message })}
}
module.exports = {registerCandidate,registerRecruiter,loginUser,getDataUser,EditProfile,EditImageProfile}