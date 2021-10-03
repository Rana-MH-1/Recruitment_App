const express = require('express')
const multer = require('multer');
const { TokenVerification } = require('../Middlewares/PostMiddlewares')
const router = express.Router();
const Apply = require("../Models/ApplySchema")
const { checkApplyOnce } = require('../Middlewares/CandidatureMiddleware');
const nodemailer = require('nodemailer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Uploads')
  },
  filename: function (req, file, cb) {
    cb(null, '-' + Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage })
//upoad multi files 
router.post('/files', TokenVerification,checkApplyOnce, upload.fields([{ name: 'cv', maxCount: 1 }, { name: 'Motivation_letter', maxCount: 1 }]), (req, res) => {
  let path = req.protocol + "://" + req.hostname + ":" + 8080 + "/Uploads/" + req.files['cv'][0].filename
  let path2 = req.protocol + "://" + req.hostname + ":" + 8080 + "/Uploads/" + req.files['Motivation_letter'][0].filename
  let recruiterId = JSON.parse(req.body.Recruiter_id);
  let Email = req.body.Recruiter_email;
  let newFile = new Apply({ CV: path, Motivation_letter: path2 ,owner:req.userId,Post:req.postId,Recruiter_id:recruiterId,Recruiter_email:Email});
  
  
  
  //send Email to the recruiter----------------------------------------------------------------------------------------
  
  // const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //         user: process.env.EMAIL,
  //         pass: process.env.PASSWORD
  //     }
  // });
  // // Email info
  // const mailOptions = {
  //     from: '"Recruitment Agency"<jobonlinewebsite13@gmail.com>',
  //     to: `${Email}`,
  //     subject: 'Apply for your post',
  //     text: 'A candidate has applied for your post attached with documents, check your list of applies',
  //     html:'<b>A candidate has applied for your post attached with documents, check your list of applies</b>',
  //     attachments :[
  //         {filename:'CV',
  //          path:`${path}`
  //     },
  //         {filename:'Motivation Letter',
  //          path:`${path2}`
  //   },
  //     ]
  // };
  // // Send email 📧  and retrieve server response
  // transporter.sendMail(mailOptions, function(error, info) {
  //     if (error) {
  //         console.log(error);
  //     } else {
  //         console.log('Email sent: ' + info.response);
  //     }
  // });
  /* end od sending mail-------------------------------------------------------------------------------------*/
  
  console.log(newFile)

  newFile.save()
    .then(file => res.status(201).send({file,msg:'You have successfully applied,check your list of applies'}))
    .catch(err => {
      console.error(err.message)
      res.status(500).send("Server error 500")
    })
})

/*----------------------une seule input multi-selectt-------------------------------------- */
// router.post('/files',TokenVerification,checkApplyOnce,upload.array("multi-files", 10),(req,res)=>{
//   let path=req.protocol +"://"+req.hostname+":"+8080+"/Uploads/"+req.files[0].filename
//   let path2=req.protocol +"://"+req.hostname+":"+8080+"/Uploads/"+req.files[1].filename
//   let newFile = new Apply({CV: path,Motivation_letter:path2,owner:req.userId,Post:req.postId});
//   newFile.save()
//       .then(file=>res.status(201).send(file))
//   //console.log(newFile)
//   .catch(err=>{
//       console.error(err.message)
//       res.status(500).send("Server error 500")
//   })
// })

/*----------------------une seule input multi-selectt fin -------------------------------------- */

/*----------------------upload one file ------------------------------------------------- */
// router.post('/',TokenVerification,checkApplyOwner,upload.single('cv'),(req,res)=>{
//     let path=req.protocol +"://"+req.hostname+":"+8080+"/Uploads/"+req.file.filename
//     let newFile = new Apply({CV: path,owner:req.userId,Post:req.postId});
//     newFile.save()
//         .then(file=>res.status(201).send(file))
//     //console.log(newFile)
//     .catch(err=>{
//         console.error(err.message)
//         res.status(500).send("Server error 500")
//     }
//     )
// });
/*----------------------upload one file fin ------------------------------------------------- */

module.exports = router;


