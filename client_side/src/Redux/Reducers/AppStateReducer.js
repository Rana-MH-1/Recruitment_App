import * as types from '../Actions/AppStateTypes'

const initState={
    isLoading: {state:false},
    errors:null
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
        default:
            return state

    }
}

export default AppStateReducer