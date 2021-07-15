const Candidate = require('../Models/CandidateSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
require('dotenv').config({path:'./config/.env'})


const registerCandidate = async (req, res) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const {FullName, Email, Password,image,LevelStudy,Specialty} = req.body
        const candidatee = await Candidate.findOne({ Email })
        if (candidatee)
            return res.status(400).json({ errors: [{ msg: 'User already exists !' }] })
        const newCandidate = new Candidate({
            FullName,
            Email,
            Password,
            LevelStudy,
            Specialty
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

module.exports = {registerCandidate}