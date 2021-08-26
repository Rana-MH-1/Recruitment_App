const mongoose = require('mongoose');

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
    
    Date_Meeting:{
        type:String,
        required:true
    },

    Duration:{
        type:String,
        required:true
    },
    
    jobTitle:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('meeting',MeetingSchema)