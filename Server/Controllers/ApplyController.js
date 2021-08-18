const FileSchema = require('../Models/FileSchema')

const getAllApply = async(req, res)=>{
    try{
        const candidatures = await FileSchema.find({}).populate({path:'owner',select:'-Password'}).populate('Post')
        res.json(candidatures)
    }
    catch{res.status(400).json({ err: err.message })}

}

const getMyApply = async(req, res)=>{
    try{
        const Mycandidature = await FileSchema.find({owner: req.userId})
        res.json(Mycandidature)
    }
    catch{res.status(400).json({ err: err.message })}

}

module.exports = {getAllApply,getMyApply}