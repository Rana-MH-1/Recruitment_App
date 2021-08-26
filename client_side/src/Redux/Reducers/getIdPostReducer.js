import {GET_ID_POST} from '../Actions/getIdPostTypes' 
const initState = ''

export const getIdPostReducer = (state=initState, {type,payload}) =>{
    switch (type) {
        case GET_ID_POST:
            return payload;
        default:
            return state;
    }
}