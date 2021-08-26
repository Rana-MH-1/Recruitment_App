const MeetingSchema = require('../Models/MeetingSchema')

const CheckNoRepeatedDate = async (req, res, next) => {
    try {
        const meeting = await MeetingSchema.findOne({owner:req.userId,Date_Meeting:req.body.Date_Meeting})
        if (!meeting)
         next()
         
         else {return res.status(400).json({ errors: 'You have already fixed a meeting in that date !' })
            }
    
    }
    catch (err) {
        return res.status(401).json({ err: err })
    }
}


const CheckMeetingOnce = async (req, res, next) => {
    try {
        const applyID = req.header('apply_id')    
        req.applyId = applyID
        const meeting = await MeetingSchema.findOne({owner:req.userId,Apply:req.applyId,Id_Candidat:req.body.Id_Candidat})
        if (!meeting)
         next()
         
         else {return res.status(400).json({ errors: 'You have already invite the candidate for a meeting to his apply !' })
            }
    
    }
    catch (err) {
        return res.status(401).json({ err: err })
    }
}


module.exports={CheckMeetingOnce,CheckNoRepeatedDate}