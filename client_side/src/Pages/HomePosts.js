import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import PostList from '../Components/PostList'
import {getPostsAction} from '../Redux/Actions/PostActions'
import {getDataUSer} from '../Redux/Actions/AuthAction'
import {getMyApplies} from "../Redux/Actions/ApplyAction"
//import Alert from "@material-ui/lab/Alert";



const HomePosts = () => {
    const dispatch = useDispatch();
    const postList = useSelector(state=> state.Posts.PostList)
    const User =useSelector(state=> state.Auth.User)
    const search = useSelector(state=> state.Filtre)

    useEffect(()=>{
        dispatch(getDataUSer())
        dispatch(getPostsAction())
        dispatch(getMyApplies())

    },[])

    const Filtering =(postList,search) =>{
        return postList.filter(post=>post.jobTitle.toLowerCase().trim().includes(search.toLowerCase().trim()))
      }

    // const errors = useSelector(state=> state.appState.errors )

    return (
        <div>
            {/* {
                errors && <Alert severity="warning" style={{margin:'0 auto',fontSize:'18px',width:800,marginTop:'10px'}}>
                {errors}
              </Alert>
            } */}
            
            
            {User && postList && <PostList PostList={Filtering(postList,search)}/>}
        
        </div>
    )
}

export default HomePosts;
