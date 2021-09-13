import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import PostList from '../Components/PostList'
import { getMyPost } from '../Redux/Actions/PostActions'

const MyPosts = () => {
    const User = useSelector(state=> state.Auth.User)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyPost())

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <div>
            {User.Role==='Recruiter' && User && User.MyPosts && <PostList PostList={User.MyPosts} />
            }
{            console.log(User.MyPosts)
}            
        </div>
    )
}

export default MyPosts
