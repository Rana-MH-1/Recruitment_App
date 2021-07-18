const mongoose = require('mongoose')
const moment = require('moment-timezone')


const PostRecruiterSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Types.ObjectId,
        ref:'Recruiter'
    },
    jobTitle:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:moment(Date.now()).tz('Africa/Tunis').format('LLLL')
    },
    Contrat_Type:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Deadline:{
        type:String,
        required:true
    },
    Nb_Candidate:Number
})

module.exports= mongoose.model('postRecuiter',PostRecruiterSchema)