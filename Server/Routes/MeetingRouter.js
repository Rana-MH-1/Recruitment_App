const express = require('express');
const router = express.Router()
const {TokenVerification} = require('../Middlewares/PostMiddlewares')
const MeetingController = require('../Controllers/MeetingController')
const {CheckNoRepeatedDate,CheckMeetingOnce} = require('../Middlewares/MeetingMiddleware')


router.post('/add',TokenVerification,CheckNoRepeatedDate,CheckMeetingOnce,MeetingController.SaveMeeting)
router.get('/RecruiterMeeting',TokenVerification,MeetingController.getRecruiterMeeting)
router.get('/CandidateMeeting',TokenVerification,MeetingController.getCandidateMeeting)
module.exports= router;