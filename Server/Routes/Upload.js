const express = require('express')
const multer  = require('multer');
const { checkApplyOwner } = require('../Middlewares/CandidatureMiddleware');
const {TokenVerification} = require('../Middlewares/PostMiddlewares')
const router= express.Router();
const File= require("../Models/FileSchema")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Uploads')
    },
    filename: function (req, file, cb) {
      cb(null,  '-' + Date.now()+ '-' +file.originalname)
    }
  })
  const upload = multer({ storage: storage })



router.post('/files',TokenVerification,checkApplyOwner,upload.single('cv'),(req,res)=>{
   
    let path=req.protocol +"://"+req.hostname+":"+8080+"/Uploads/"+req.file.filename
    let newFile = new File({FileName: path});
    newFile.save()
        .then(file=>res.status(201).send(file))
    //console.log(newFile)
    .catch(err=>{
        console.error(err.message)
        res.status(500).send("Server error 500")
    }

    )

    
});


module.exports = router;