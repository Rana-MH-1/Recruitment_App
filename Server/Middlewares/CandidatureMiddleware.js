const FileSchema = require('../Models/ApplySchema')

const checkApplyOwner = async (req, res, next) => {
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

module.exports ={checkApplyOwner}
// la7dha bech tcommiti 3al main ! wela 3al branchi mta3i :req.//netsawer matbedelch saretli lezmi taaommit w mbaed update w f lekeher tpushi  behi oke check inti mzlt al branch mtaak? ui 
//ema eni taw badeltha 3al main bhi rajaa.ha ala ton branch mesh dhaher andi l branch khatr kan akiil logo ui 7ata eni 