const mongoose = require('mongoose');
const moment = require('moment-timezone')

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
        default:moment(Date.now()).tz('Africa/Tunis').format('LLLL')
    },
});
module.exports = mongoose.model('file', FileSchema)