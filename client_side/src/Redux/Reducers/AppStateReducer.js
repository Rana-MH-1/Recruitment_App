import * as types from '../Actions/AppStateTypes'
import * as Mtypes from '../Actions/MeetingTypes'
import * as Atypes from '../Actions/ApplyTypes'
import * as Ptypes from '../Actions/PostTypes'

const initState={
    isLoading: {state:false},
    errors:null,
    msg:null
}

const AppStateReducer =(state=initState,{type,payload})=>{
    switch(type){
        case types.START_LOADING:
            return{
                ...state,
                isLoading:{state:true, ref : payload}
            }
        case types.STOP_LOADING:
            return{
                ...state,
                isLoading:{state:false}
            }
        case types.SET_ERROR:
            return{
                ...state,
                errors:payload
            }
        case types.CLEAR_ERROR:
            return{
                ...state,
                errors:null
            }
        case Atypes.ADD_APPLY_SUCCESS:
            return{
                ...state,
                msg:payload.msg
            }
        case Mtypes.ADD_MEETING_SUCCESS:
            return{
                ...state,
                msg:payload.msg
            }
        case types.CLEAR_MSG:
            return{
                ...state,
                msg:null
            }
        case Ptypes.ADD_POST_SUCCESS:
            return{
                ...state,
                msg:payload.msg
            }
        default:
            return state

    }
}

export default AppStateReducer