import {GET_ID_APPLY_SUCCESS} from './getIdApplyTypes'

export const getIdApply =(apply_id)=>{
    return{
        type: GET_ID_APPLY_SUCCESS,
        payload:apply_id
    }
}

