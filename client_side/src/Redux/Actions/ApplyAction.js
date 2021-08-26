import * as ApplyTypes from './ApplyTypes'
import {startLoading,stopLoading,setError,clearError} from './AppStateActions'
import { setToken } from '../../helpers/setToken';
import axios from 'axios';
import { prefixe } from '../../helpers/prefixe';
import { setPostID } from "../../helpers/setPostId";



export const AddApply=(files)=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("Adding apply..."))
    try{
        setPostID();
        const {data} = await axios.post(`${prefixe}/api/cv/files`,files)
        dispatch({
            type: ApplyTypes.ADD_APPLY_SUCCESS,
            payload: data
        })
        dispatch(stopLoading());
        dispatch(getMyApplies());
        alert('You have successfully applied')
        
    }
    catch(err){
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
        
    }
}

export const getMyApplies=()=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("get My applies"))
    try{
        setToken()
        const {data} = await axios.get(`${prefixe}/api/Apply/MyApply`)
        dispatch({
            type: ApplyTypes.GET_My_APLLIES_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch(err){
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
        
    }
}

export const getReceivedApplies =()=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("get received applies"))
    try{
        setToken()
        const {data} = await axios.get(`${prefixe}/api/Apply/ApplyReceived`)
        dispatch({
            type: ApplyTypes.GET_RECEIVED_APPLIES_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch(err){
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
        
    }
}



