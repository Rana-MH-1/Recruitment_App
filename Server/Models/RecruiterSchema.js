const mongoose = require('mongoose');

const RecruiterSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },
    Email: String,
    Password: String,
    Image: String,
    Profession:{
        type: String,
        required:true
    },
    SocietyName:{
        type: String,
        required:true
    },
    ActivityField:{
        type: String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    taxRegistrationNumber:Number
})

module.exports = mongoose.model('Recruiter', RecruiterSchema)