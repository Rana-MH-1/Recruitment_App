const mongoose = require('mongoose');

const CandidatureSchema = new mongoose.Schema({
    Post: {
        type: mongoose.Types.ObjectId,
        ref:'postRecuiter'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'user'
    },
    files:{
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
})

module.exports = mongoose.model('candidature',CandidatureSchema)