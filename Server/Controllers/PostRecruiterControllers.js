const postRecuiter = require('../Models/PostRecruiterSchema')

const AddPost= async(req,res)=>{
    try{ 
        const {jobTitle,jobDescription,Contrat_Type,Address,Deadline,Nb_Candidate}=req.body
        const newPost = new postRecuiter({
            owner:req.userId,
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

const getAllPosts = async(req, res)=>{
    try{
        const posts = await postRecuiter.find({}).sort({createdAt:-1}).populate({path:'owner',select:'-Password'})
        res.json(posts)
    }
    catch{res.status(400).json({ err: err.message })}
}

const getMyPosts = async(req, res)=>{
    try{
        const posts = await postRecuiter.find({owner: req.userId})
        res.json(posts)
    }
    catch{res.status(400).json({ err: err.message })}
}

const EditPost = async(req, res)=>{
    try{
        const updatedPost = await postRecuiter.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedPost)
    }
    catch{res.status(400).json({ err: err.message })}
}

const DeletePost = async(req, res)=>{
    postRecuiter.findByIdAndRemove(req.params.id,(err,data)=>err? res.status(400).json({ err: err.message }) : res.json(data))
}


module.exports= {AddPost,getAllPosts,getMyPosts,EditPost,DeletePost}