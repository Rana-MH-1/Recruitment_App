
import * as types from '../Actions/AuthTypes'
import *as postTypes from '../Actions/PostTypes'
import * as ApplyTypes from '../Actions/ApplyTypes'
import * as MeetingTypes from '../Actions/MeetingTypes'


const initState={
    token:localStorage.getItem('token'),
    isAuth:Boolean(localStorage.getItem('isAuth')),
    User:JSON.parse(localStorage.getItem('User')),
    MyPosts:[],
    MyApplies:[],
    Appliesreceived:[],
    R_Meeting_List:[],
    C_Meeting_List :[]
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
        case ApplyTypes.GET_My_APLLIES_SUCCESS:
            return{
                ...state,
                User:{...state.User,
                MyApplies:payload}
            }
        case ApplyTypes.GET_RECEIVED_APPLIES_SUCCESS:
            return{
                ...state,
                User:{...state.User,
                Appliesreceived: payload}
            }
        case MeetingTypes.GET_MEETINGLIST_R_SUCCESS:
            return{
                ...state,
                User:{...state.User,
                R_Meeting_List: payload}
            }
        case MeetingTypes.GET_MEETINGLIST_C_SUCCESS :
            return {
                ...state,
                User:{...state.User,
                C_Meeting_List: payload}
            }
        default:
            return state
    }
}

export default AuthReducer
