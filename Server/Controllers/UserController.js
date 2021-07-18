const candidate = require('../Models/UserSchema')
const recruiter = require('../Models/UserSchema')
const user = require('../Models/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
require('dotenv').config({path:'./config/.env'})

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
            return res.status(404).json({ errors: [{ msg: 'You have to sign up first' }] })
            //compare between password(1) in req.body and in db 
            const isMatch = await bcrypt.compare(Password, Userr.Password)
        if (!isMatch)
            return res.status(404).json({ errors: [{ msg: 'The password is uncorrect' }] })
        const payload = {
            sub: Userr._id
        }
        const token = await jwt.sign(payload, process.env.SECRET)
        res.json({token})
    }
    catch{res.status(400).json({ errors: [{ msg: err.message }] })}
}

module.exports = {registerCandidate,registerRecruiter,loginUser}