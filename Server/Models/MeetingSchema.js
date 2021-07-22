const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({

    owner: {
        type: mongoose.Types.ObjectId,
        ref:'user'
    },
    candidature: {
        type: mongoose.Types.ObjectId,
        ref:'candidature'
    },
    Date_Meeting:{
        type:Date,
        required:true
    },

    Duration:{
        type:String
    }

})

module.exports = mongoose.model('meeting',MeetingSchema)