const FileSchema = require('../Models/FileSchema')

const checkApplyOwner = async (req, res, next) => {
    try {
        const candidature = await FileSchema.findOne({ _id:req.params.id, owner: req.userId })
        if (!candidature)
            return res.status(401).json({ err: 'You are not authorized !' })
        next()
    }
    catch (err) {
        return res.status(401).json({ err: err })
    }
}


module.exports ={checkApplyOwner}