const MeetingSchema = require('../Models/MeetingSchema')
var dayjs = require('dayjs')
const moment = require('moment-timezone')


const CheckNoRepeatedDate = async (req, res, next) => {
    try {
        const meeting = await MeetingSchema.findOne({owner:req.userId,Date_Meeting:req.body.Date_Meeting})
        const meetingowner = await MeetingSchema.find({owner:req.userId})
        const addedDuration= meetingowner.map(meeting=> meeting.Date_Meeting= dayjs(meeting.Date_Meeting).add(+req.body.Duration,'minute').$d )
        console.log(addedDuration)
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

const CheckDateDuration = async (req, res, next) => {
    try {
        const meetingowner = await MeetingSchema.find({owner:req.userId})
        if(meetingowner.length){
            const addedDuration= meetingowner.map(meeting=> meeting.Date_Meeting= dayjs(meeting.Date_Meeting).add(+req.body.Duration,'minute').$d )

        const findMeeting = addedDuration.indexOf(req.body.Date_Meeting.substring(0,16))
        console.log(findMeeting)
        if (findMeeting!=-1)
        return res.status(400).json({ errors: 'You have already a meeting during that time, please select another Date !' })

        }
        
        next()
         
    
    }
    catch (err) {
        return res.status(401).json({ err: err })
    }
}


module.exports={CheckMeetingOnce,CheckNoRepeatedDate,CheckDateDuration}