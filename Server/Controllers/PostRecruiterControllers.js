const postRecuiter = require('../Models/PostRecruiterSchema')
const {validationResult} = require('express-validator')


const AddPost= async(req,res)=>{
    try{ 
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
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
        res.json({savedPost,msg:'Post added successfully'})
        
    }
    catch{
        res.status(400).json({ errors: [{ msg: err.message }] })
    }
}

const getAllPosts = async(req, res)=>{
    try{
        let limit = +req.query.limit
        let pageNumber = +req.query.page
        let documentCount = await postRecuiter.find().countDocuments()
        let TotalNumberOfPages = Math.ceil(documentCount / limit);

        const posts = await postRecuiter.find({})
        .sort({createdAt:-1})
        .populate({path:'owner',select:'-Password'})
        .skip((pageNumber - 1) * limit)
        .limit(limit)
        res.json(posts)
    }
    catch{res.status(400).json({ err: err.message })}
}

const getMyPosts = async(req, res)=>{
    try{
        const posts = await postRecuiter.find({owner: req.userId}).populate({path:'owner',select:'-Password'})
        res.json(posts)
    }
    catch{res.status(400).json({ err: err.message })}
}

const getMyPostsCount = async(req, res)=>{
    try{
        const posts = await postRecuiter.find({owner: req.userId}).countDocuments()
        res.json(posts)
    }
    catch{res.status(400).json({ err: err.message })}
}


const EditPost = async(req, res)=>{
    try{
        const updatedPost = await postRecuiter.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(updatedPost)
        console.log(updatedPost)
    }
    catch{res.status(400).json({ err: err.message })}
}

const DeletePost = async(req, res)=>{
    postRecuiter.findByIdAndRemove(req.params.id,(err,data)=>err? res.status(400).json({ err: err.message }) : res.json(data))
}

const getPostsCount = async (req, res) => {
    try {
        const count = await postRecuiter.find().countDocuments()
        res.json(count)
    }
    catch (err) {
        res.status(400).json({ errors: [{ msg: err.message }] })

    }
}

const FilterPosts = async(req, res)=>{
    try{
        // let search1 = req.query.search1.trim();
        // let search2 = req.query.search2.trim();
        // const FilteredPosts = await postRecuiter.find({$or: [{jobTitle: {$regex: `^${search1}`}, Contrat_Type: {$regex: `^${search2}`}}]})
        let search = req.query.search.trim();
        const FilteredPostbyTitle = await postRecuiter.find({jobTitle:{$regex: new RegExp('^'+search+'.*','i')}}).exec()
        const FilteredPostsDESC = await postRecuiter.find({jobDescription:{$regex: new RegExp('^'+search+'.*','i')}}).exec()
        const FilteredPostC = await postRecuiter.find({Contrat_Type:{$regex: new RegExp('^'+search+'.*','i')}}).exec()
        const FilteredPostAddress = await postRecuiter.find({Address:{$regex: new RegExp('^'+search+'.*','i')}}).exec()


        res.json([...FilteredPostbyTitle,...FilteredPostsDESC,...FilteredPostC,...FilteredPostAddress])
    }
    catch{res.status(400).json({ err: err.message })}
}


module.exports= {AddPost,getAllPosts,getMyPosts,EditPost,DeletePost,getPostsCount,getMyPostsCount,FilterPosts}