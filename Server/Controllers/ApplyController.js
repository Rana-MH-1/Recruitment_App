const ApplySchema = require('../Models/ApplySchema')

const getMyApply = async(req, res)=>{
    try{
        const Mycandidature = await ApplySchema.find({owner: req.userId}).populate({path:'owner',select:'-Password'}).populate('Post')
        res.json(Mycandidature)
    }
    catch{res.status(400).json({ err: err.message })}

}

const getApplybyRecruiter = async(req, res)=>{
    try{
        const applyreceived = await ApplySchema.find({Recruiter_id: req.userId}).populate({path:'owner',select:'-Password'}).populate('Post')
        res.json(applyreceived)
    }
    catch{res.status(400).json({ err: err.message })}

}

const CountMyApplies = async(req, res)=>{
    try{
        const count = await ApplySchema.find({owner: req.userId}).countDocuments()
        res.json(count)
    }
    catch{res.status(400).json({ err: err.message })}

}

module.exports = {getMyApply,getApplybyRecruiter,CountMyApplies}