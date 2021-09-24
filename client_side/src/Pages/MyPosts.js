import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import PostList from '../Components/PostList'
import { getMyPost } from '../Redux/Actions/PostActions'

const MyPosts = () => {
    const MyPosts = useSelector(state=> state.Auth.User.MyPosts)
    const User = useSelector(state=>state.Auth.User)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyPost())
      }, [dispatch]);
    return (
        <div>
            {User.Role==='Recruiter' && User && User.MyPosts && <PostList PostList={MyPosts} />
            }
{            console.log(User.MyPosts)
}            
        </div>
    )
}

export default MyPosts
