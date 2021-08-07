import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { logout } from '../Redux/Actions/AuthAction'
import AddPost from '../Components/AddPost'
import PostList from '../Components/PostList'
import {getPostsAction} from '../Redux/Actions/PostActions'
import {getDataUSer} from '../Redux/Actions/AuthAction'


const HomePosts = () => {
    const dispatch = useDispatch();
    const postList = useSelector(state=> state.Posts.PostList)
    const auth =useSelector(state=> state.Auth)
    useEffect(()=>{
        dispatch(getPostsAction())
        dispatch(getDataUSer())

    },[])

    return (
        <div>
            <h1>Welcome Home</h1>
            <button onClick={()=>dispatch(logout())}>LOGOUT</button>
            <AddPost/>
            <PostList PostList={postList}/>
            
            
        </div>
    )
}

export default HomePosts;
