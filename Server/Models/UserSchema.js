const mongoose = require('mongoose')
const extendSchema = require('mongoose-extend-schema');

const UserSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },
    Email: {
        type:String,
        required:true,
        unique:true
    },
    Password: {
        type:String,
        required:true
    },
    Image: String,
    Role:{
        type:String
    },

    LevelStudy:{type:String},
    Specialty:{type:String},
    Specialty:{type:String},
    Profession:{type:String},
    SocietyName:{type:String},
    ActivityField:{type:String},
    Category:{type:String},
    taxRegistrationNumber:{type:Number}
})

// Extend UserSchema
const candidateSchema = extendSchema(UserSchema,{
    LevelStudy:{
        type: String,
        required: true
    },
    Specialty:{
        type: String,
        required:true
    },
    Role:{
        type:String,
        required:true,
        default:'candidate'
    }
})

const recruiterSchema = extendSchema(UserSchema,{
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
    Role:{
        type:String,
        required:true,
        default:'recruiter'
    }
})

module.exports=mongoose.model('user', UserSchema),
mongoose.model('candidate', candidateSchema),
mongoose.model('recruiter', recruiterSchema)

