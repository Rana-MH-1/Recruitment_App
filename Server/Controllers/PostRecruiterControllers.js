const postRecuiter = require('../Models/PostRecruiterSchema')

const AddPost= async(req,res)=>{
    try{
        const {jobTitle,jobDescription,Contrat_Type,Address,Deadline,Nb_Candidate}=req.body
        const newPost = new postRecuiter({
            owner:req.recruiterId,
            jobTitle,
            jobDescription,
            Contrat_Type,
            Address,
            Deadline,
            Nb_Candidate
        })

        const savedPost = await newPost.save()
        res.json(savedPost)
    }
    catch{
        res.status(400).json({ err: err.message })
    }

}

module.exports= {AddPost}