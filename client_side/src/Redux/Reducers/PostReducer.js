import * as types from '../Actions/PostTypes'

const initState={
    PostList:[],
    count:0
}

const PostReducer =(state = initState,{type,payload})=>{
    switch(type){
        case types.GET_POSTS_SUCCESS:
            return {
                ...state,
                PostList:payload
            }
        case types.EDIT_POST_SUCCESS:
            return {
                ...state,
                PostList:state.PostList.map(post=>post._id === payload._id? {...post,...payload} : post)
            }
        case types.DELETE_POST_SUCCESS:
            return {
                ...state,
                PostList:state.PostList.filter(post=> post._id !== payload._id)
            }
        case types.GET_POST_COUNT_SUCCESS:
            return{
                ...state,
                count:payload
            }
        case types.FILTER_POSTS_SUCCESS:
            return {
                ...state,
                PostList: state.PostList.filter(post => payload.some(el => post._id === el._id))
            }

        default :
        return state;

    }

}

export default PostReducer;