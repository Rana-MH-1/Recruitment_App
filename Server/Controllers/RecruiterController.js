const Recruiter = require('../Models/RecruiterSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
require('dotenv').config({path:'./config/.env'})

const registerRecruiter = async (req, res) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const {FullName, Email, Password,image,Profession,SocietyName,ActivityField,Category,taxRegistrationNumber} = req.body
        const recruiterr = await Recruiter.findOne({ Email })
        if (recruiterr)
            return res.status(400).json({ errors: [{ msg: 'User already exists !' }] })
        const newRecruiter = new Recruiter({
            FullName,
            Email,
            Password,
            Profession,
            SocietyName,
            ActivityField,
            Category,
            taxRegistrationNumber
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

module.exports = {registerRecruiter}