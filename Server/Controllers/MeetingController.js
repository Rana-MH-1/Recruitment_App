const meeting = require('../Models/MeetingSchema')
const nodemailer = require('nodemailer');
const {validationResult} = require('express-validator')



const SaveMeeting= async(req,res)=>{
    try{
    const errors = validationResult(req)
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.mapped() })
    const {Id_Candidat,Name_Candidat,Date_Meeting,Duration,jobTitle,Email_Candidat} = req.body
    const newMetting = meeting({
        owner:req.userId,
        Apply:req.applyId,
        Id_Candidat,
        Name_Candidat,
        Date_Meeting,
        Duration,
        jobTitle,
        Email_Candidat
    })
    const savedMeeting = await newMetting.save()

    //send Email to the recruiter----------------------------------------------------------------------------------------
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
// Email info
const mailOptions = {
    from: '"Recruitment Agency"<syrinemabrouk6@gmail.com>',
    to: `${Email_Candidat}`,
    subject: 'Invitation for an Online Interview meeting',
    text: `A Recruiter has invites you for an online interview meeting on ${Date_Meeting} for the job ${jobTitle}, please check your list of meeting for more informations`,
    html:`A Recruiter has invites you for an online interview meeting on <b> ${Date_Meeting}</b> for the job <b> ${jobTitle}</b> , please check your list of meeting for more informations`,
};
// Send email 📧  and retrieve server response
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
/* end od sending mail-------------------------------------------------------------------------------------*/

    res.json({savedMeeting,msg:'The meeting was successfully saved, check your list of meeting'})
    }
    catch{res.status(400).json({ errors: [{ msg: err.message }] })}
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