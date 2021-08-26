const ApplySchema = require('../Models/ApplySchema')

const checkApplyOnce = async (req, res, next) => {
    try {
        const id_Post = req.header("id_Post")
        req.postId= id_Post;
        const candidature = await ApplySchema.findOne({owner: req.userId,Post:req.postId})
        if (!candidature)
         next()
         
         else {return res.status(400).json({ errors: 'You have already applied !' })
            }
    
    }
    catch (err) {
        return res.status(401).json({ err: err })
    }
}

module.exports ={checkApplyOnce}
