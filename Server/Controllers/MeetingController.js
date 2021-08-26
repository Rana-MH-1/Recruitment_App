const meeting = require('../Models/MeetingSchema')

const SaveMeeting= async(req,res)=>{
    try{
    const {Id_Candidat,Name_Candidat,Date_Meeting,Duration,jobTitle} = req.body
    const newMetting = meeting({
        owner:req.userId,
        Apply:req.applyId,
        Id_Candidat,
        Name_Candidat,
        Date_Meeting,
        Duration,
        jobTitle
    })
    const savedMeeting = await newMetting.save()
    res.json(savedMeeting)
    }
    catch{res.status(400).json({ err: err.message })}
}

const getRecruiterMeeting = async(req, res)=>{
    try{
        const meetingR = await meeting.find({owner: req.userId}).populate({path:'owner',select:'-Password'}).populate('Apply')
        res.json(meetingR)
    }
    catch{res.status(400).json({ err: err.message })}

}

const getCandidateMeeting = async(req, res)=>{
    try{
        const meetingC = await meeting.find({Id_Candidat:req.userId}).populate({path:'owner',select:'-Password'}).populate('Apply')
        res.json(meetingC)
    }
    catch{res.status(400).json({ err: err.message })}

}

module.exports = {SaveMeeting,getRecruiterMeeting,getCandidateMeeting}