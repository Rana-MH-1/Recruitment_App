import axios from 'axios';
import { prefixe } from '../../helpers/prefixe';
import * as types from './AuthTypes';
import {startLoading,stopLoading,setError,clearError} from './AppStateActions'
import { setToken } from '../../helpers/setToken';
import { getMyPost } from './PostActions';

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
        //dispatch(getPostsAction())
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