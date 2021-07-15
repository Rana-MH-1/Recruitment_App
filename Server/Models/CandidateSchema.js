const mongoose = require('mongoose')

const CandidateSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },
    Email: String,
    Password: String,
    Image: String,
    LevelStudy:{
        type: String,
        required: true
    },
    Specialty:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Candidate', CandidateSchema)