const Condidature = require('../Models/CandidatureSchema')
const AddCondidature= async(req,res)=>{
    try{ 
        const {files}=req.body
        const newCondidature = new Condidature({
            Post: req.postId,
            owner:req.userId,
            files: files
            })

        const savedCondidature= await newCondidature.save()
        res.json(savedCondidature)
        
    }
    catch{
        res.status(400).json({ err: err.message })
    }
}

module.exports= {AddCondidature}