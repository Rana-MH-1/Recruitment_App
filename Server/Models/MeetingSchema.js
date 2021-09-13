const mongoose = require('mongoose');
const moment = require('moment-timezone')


const MeetingSchema = new mongoose.Schema({

    owner: {
        type: mongoose.Types.ObjectId,
        ref:'user'
    },
    Apply: {
        type: mongoose.Types.ObjectId,
        ref:'Apply'
    },

    Id_Candidat: String,
    Name_Candidat:String,
    Email_Candidat:String,
    
    Date_Meeting:{
        type:Date,
        required:true
    },

    Duration:{
        type:String,
        required:true
    },
    
    jobTitle:String

})

module.exports = mongoose.model('meeting',MeetingSchema)