import { GET_ID_POST } from "./getIdPostTypes"

export const getIdPost = (post_id)  => {
    return {
        type:GET_ID_POST,
        payload: post_id
    }
    
}  