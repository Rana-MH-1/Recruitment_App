import axios from 'axios'

export const setPostID = () => {
    const PostId = localStorage.getItem('id_Post')
    if (PostId)
        axios.defaults.headers.common["id_Post"] = PostId
    else
        delete axios.defaults.headers.common["id_Post"]

}


//zayed m3ak oubara ;
//juste shouf el db
//mrigueeel // just lezem li posta 3liha ma3adech 3andou 7a9 i3awed iposti nhotou attribut boolean ken post true si nn false