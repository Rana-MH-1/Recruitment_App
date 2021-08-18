const express = require('express')
const multer = require('multer');
const { TokenVerification } = require('../Middlewares/PostMiddlewares')
const router = express.Router();
const Apply = require("../Models/ApplySchema")
const { checkApplyOnce } = require('../Middlewares/CandidatureMiddleware');

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
  let newFile = new Apply({ CV: path, Motivation_letter: path2 ,owner:req.userId,Post:req.postId});
  newFile.save()
    .then(file => res.status(201).send(file))
    //console.log(newFile)
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

//khamamt n3adi history taa component Post 
//wala ndispatchi action trecuperi l id taa post ki tecliqui ui ritek 5demtha fel delete kia haka 5ir je pense
//behi juste arjaali lil app components Post

