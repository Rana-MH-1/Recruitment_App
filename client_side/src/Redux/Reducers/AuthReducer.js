
import * as types from '../Actions/AuthTypes'

const initState={
    token:localStorage.getItem('token'),
    isAuth:Boolean(localStorage.getItem('isAuth')),
    User:JSON.parse(localStorage.getItem('User'))
}
const AuthReducer =(state=initState,{type,payload})=>{

    switch (type){
        case types.REGISTER_SUCCESS :
        case types.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            localStorage.setItem('isAuth', false)
            return{
                ...state,
                isAuth:true,
                token:payload.token
            }
        case types.GET_DATA_USER_SUCCESS:
            localStorage.setItem('User', JSON.stringify(payload))
            return{
                ...state,
                User: payload
            }
        case types.LOGOUT:
            localStorage.clear()
            return{
                token:null,
                isAuth:false,
                User:null
            }
        default:
            return state
    }
}

export default AuthReducer
