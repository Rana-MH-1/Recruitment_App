
import * as types from '../Actions/AuthTypes'
import *as postTypes from '../Actions/PostTypes'

const initState={
    token:localStorage.getItem('token'),
    isAuth:Boolean(localStorage.getItem('isAuth')),
    User:JSON.parse(localStorage.getItem('User')),
    MyPosts:[]
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
        case postTypes.GET_MY_POST_SUCCESS:
            return{
                ...state,
                User:{...state.User,
                MyPosts:payload}
            }
        default:
            return state
    }
}

export default AuthReducer
// heka bech t7ai kol chay e7na 7achta ken bel id postri rahi mrigla deja eni nahkich al local storage nahki al modal taa el apply ki nzelt al send apply matna7atch el modal 
// atan3mlou fath .then alet post avec succee