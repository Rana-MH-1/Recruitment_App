import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import PostList from '../Components/PostList'
import {getPostsAction} from '../Redux/Actions/PostActions'
import {getDataUSer} from '../Redux/Actions/AuthAction'


const HomePosts = () => {
    const dispatch = useDispatch();
    const postList = useSelector(state=> state.Posts.PostList)
    const User =useSelector(state=> state.Auth.User)
    const search = useSelector(state=> state.Filtre)

    useEffect(()=>{
        dispatch(getDataUSer())
        dispatch(getPostsAction())

    },[])

    const Filtering =(postList,search) =>{
        return postList.filter(post=>post.jobTitle.toLowerCase().trim().includes(search.toLowerCase().trim()))
      }

    return (
        <div>
            
            {User && postList && <PostList PostList={Filtering(postList,search)}/>}
        
        </div>
    )
}

export default HomePosts;
