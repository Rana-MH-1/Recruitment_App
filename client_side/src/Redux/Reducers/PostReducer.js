import * as types from '../Actions/PostTypes'

const initState={
    PostList:[]
}

const PostReducer =(state = initState,{type,payload})=>{
    switch(type){
        case types.GET_POSTS_SUCCESS:
            return {
                ...state,
                PostList:payload
            }
        case types.EDIT_POST_SUCCESS:
            return state.map(post=>post._id === payload._id? {...post,...payload} : post)
        default :
        return state;

    }

}

export default PostReducer;