import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { logout } from '../Redux/Actions/AuthAction'
import { useHistory } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const Auth = useSelector(state=> state.Auth)
    useEffect(()=>{
        if(!Auth.isAuth)
        history.push('/login')
    })
    return (
        <div>
            <h1>Welcome Home</h1>
            <button onClick={()=>dispatch(logout())}>LOGOUT</button>
        </div>
    )
}

export default Home
