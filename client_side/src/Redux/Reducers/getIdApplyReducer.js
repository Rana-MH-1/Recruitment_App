import {GET_ID_APPLY_SUCCESS} from '../Actions/getIdApplyTypes'

const initState = ''

export const getIdApplyReducer = (state=initState, {type,payload}) =>{
    switch (type) {
        case GET_ID_APPLY_SUCCESS:
            return payload;
        default:
            return state;
    }
}