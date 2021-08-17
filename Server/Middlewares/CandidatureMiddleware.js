const FileSchema = require('../Models/FileSchema')

const checkApplyOnce = async (req, res, next) => {
    try {
        const id_Post = req.header("id_Post")
        req.postId= id_Post;
        const candidature = await FileSchema.findOne({ _id:req.params.id, owner: req.userId,Post:req.postId })
        if (candidature)
            return res.status(401).json({ err: 'You have already applied !' })
         next()
            
        
    }
    catch (err) {
        return res.status(401).json({ err: err })
    }
}


module.exports ={checkApplyOnce}