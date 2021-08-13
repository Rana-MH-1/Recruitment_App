const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({

    Post: {
        type: mongoose.Types.ObjectId,
        ref: 'postRecuiter'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    
    FileName: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
});
module.exports = mongoose.model('file', FileSchema)