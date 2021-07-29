import React from 'react'
import { useDispatch} from 'react-redux'
import { logout } from '../Redux/Actions/AuthAction'
import AddPost from '../Components/AddPost'


const HomePosts = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Welcome Home</h1>
            <button onClick={()=>dispatch(logout())}>LOGOUT</button>
            <AddPost/>
            
        </div>
    )
}

export default HomePosts;
