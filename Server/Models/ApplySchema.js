const mongoose = require('mongoose');
const moment = require('moment-timezone')

const ApplySchema = new mongoose.Schema({

    Post: {
        type: mongoose.Types.ObjectId,
        ref: 'postRecuiter'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    Recruiter_id:String,
    CV: {
        type:String,
        required:true
    },
  

    Motivation_letter: {
        type:String,
        required:true
    },
    
   

    createdAt:{
        type:Date,
        default:moment(Date.now()).tz('Africa/Tunis').format('LLLL')
    },
});
module.exports = mongoose.model('Apply', ApplySchema)