const express = require('express')
const multer = require('multer');
const { TokenVerification } = require('../Middlewares/PostMiddlewares')
const router = express.Router();
const Apply = require("../Models/ApplySchema")

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
router.post('/files', TokenVerification, upload.fields([{ name: 'file1', maxCount: 1 }, { name: 'file2', maxCount: 1 }]), (req, res) => {
  let path = req.protocol + "://" + req.hostname + ":" + 8080 + "/Uploads/" + req.files['file1'][0].filename
  let path2 = req.protocol + "://" + req.hostname + ":" + 8080 + "/Uploads/" + req.files['file2'][0].filename
  let newFile = new Apply({ CV: path, Motivation_letter: path2});
  newFile.save()
    .then(file => res.status(201).send(file))
    //console.log(newFile)
    .catch(err => {
      console.error(err.message)
      res.status(500).send("Server error 500")
    })
})


//uplod one file
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


module.exports = router;