import axios from 'axios';
import { prefixe } from '../../helpers/prefixe';
import * as types from './AuthTypes';
import {startLoading,stopLoading,setError,clearError} from './AppStateActions'
import { setToken } from '../../helpers/setToken';
import { getMyPost } from './PostActions';
import {getReceivedApplies,getCOUNTApplies} from './ApplyAction'
import{getRecruiterMeetingCount,getCandidateMeetingCount} from './MeetingAction'
import{getMyPostCount} from './PostActions'

export const RegisterAction=(info)=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("Register"))
    try{
        const res = await axios.post(`${prefixe}/api/Users/register`,info)
        dispatch({
            type: types.REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(stopLoading())
        //dispatch(getDataUSer())
    }
    catch(err){
        dispatch(setError(err.response?.data?.errors))
        dispatch(stopLoading())
    }
}

export const LoginAction=(info)=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("Login"))
    try{
        const res = await axios.post(`${prefixe}/api/Users/login`,info)
        dispatch({
            type: types.LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(stopLoading())
        //dispatch(getDataUSer())
    }
    catch(err){
        dispatch(setError(err.response?.data?.errors))
        dispatch(stopLoading())
    }
}

export const getDataUSer=()=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("get Data User"))
    try{
        setToken()
        const {data} = await axios.get(`${prefixe}/api/Users/getDataUser`)
        dispatch({
            type: types.GET_DATA_USER_SUCCESS,
            payload: data
        })
        dispatch(getMyPost())
        dispatch(getReceivedApplies())
    }
    catch(err){
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
        
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}

export const EditProfile = (EditedProfile) => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Editing data..."))
    try {
        console.log(EditedProfile)
        setToken()
        const res = await axios.put(`${prefixe}/api/Users/EditProfile/${EditedProfile._id}`,EditedProfile)
        dispatch({
            type: types.UPDATE_PROFILE_USER,
            payload: res.data
        })
        dispatch(stopLoading())
        dispatch(getDataUSer())
        dispatch(getRecruiterMeetingCount())
        dispatch(getCandidateMeetingCount())
        dispatch(getMyPostCount())
        dispatch(getCOUNTApplies())
    }
    catch (err) {
        dispatch(setError(err.response?.data?.errors))
        dispatch(stopLoading())
        dispatch(getRecruiterMeetingCount())
        dispatch(getCandidateMeetingCount())
    }
}  