import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import PostList from '../Components/PostList'
import { FiltreAction } from '../Redux/Actions/FiltreAction'
import { getMyPost } from '../Redux/Actions/PostActions'

const MyPosts = () => {
    const MyPosts = useSelector(state=> state.Auth.User.MyPosts)
    const User = useSelector(state=>state.Auth.User)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyPost())
      }, [dispatch]);

      const search = useSelector((state) => state.Filtre);

      const Filtering = (MyPosts, search) => {
        return MyPosts.filter(
          (post) =>
            post.jobTitle
              .toLowerCase()
              .trim()
              .includes(search.toLowerCase().trim()) ||
            post.jobDescription
              .toLowerCase()
              .trim()
              .includes(search.toLowerCase().trim()) ||
            post.Contrat_Type.toLowerCase()
              .trim()
              .includes(search.toLowerCase().trim()) ||
            post.Address.toLowerCase().trim().includes(search.toLowerCase().trim())
        );
      };
    return (
        <div>
            <div class="ui icon input" style={{marginLeft:'650px',marginTop:'20px'}}><input type="text" placeholder="Search..." onChange={(e)=> dispatch(FiltreAction(e.target.value))}/><i aria-hidden="true" class="search icon"></i></div>

            {User.Role==='Recruiter' && User && User.MyPosts && <PostList PostList={Filtering(MyPosts, search)} />
            }
{            console.log(User.MyPosts)
}            
        </div>
    )
}

export default MyPosts
