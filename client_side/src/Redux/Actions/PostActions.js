import axios from 'axios';
import { prefixe } from '../../helpers/prefixe';
import {startLoading,stopLoading,setError,clearError} from './AppStateActions'
import { setToken } from '../../helpers/setToken';
import * as types from './PostTypes'

export const PostAction=(newPost)=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("Adding post ..."))
    try{
        setToken()
        const {data} = await axios.post(`${prefixe}/api/Posts/postReruiter`,newPost)
        dispatch({
            type: types.ADD_POST_SUCCESS,
            payload: data
        })
        dispatch(getPostsAction())
    }
    catch(err){
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
        
    }
}

export const getPostsAction=()=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("get all Posts"))
    try{
        const {data} = await axios.get(`${prefixe}/api/Posts/AllPosts`)
        dispatch({
            type: types.GET_POSTS_SUCCESS,
            payload: data
        })
        console.log(data)
        dispatch(stopLoading())
    }
    catch(err){
        dispatch(setError(err.response?.data?.errors))
        dispatch(stopLoading())
    }
}

export const getMyPost = () => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Get My Posts..."))
    try {
        setToken()
        const { data } = await axios.get(`${prefixe}/api/Posts/MyPosts`)
        dispatch({
            type: types.GET_MY_POST_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}

export const EditPost = (EditedPost) => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Editing Posts..."))
    try {
        console.log(EditedPost)
        setToken()
        const res = await axios.put(`${prefixe}/api/Posts/EditPosts/${EditedPost._id}`,EditedPost)
        dispatch({
            type: types.EDIT_POST_SUCCESS,
            payload: res.data
        })
        dispatch(stopLoading())
        
    }
    catch (err) {
        dispatch(setError(err.response?.data?.errors))
        dispatch(stopLoading())
    }
}  

export const DeletePost = (id) => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Deleting Posts..."))
    try {
        console.log(id)
        setToken()
        const res = await axios.delete(`${prefixe}/api/Posts/DeletePost/${id}`)
        dispatch({
            type: types.DELETE_POST_SUCCESS,
            payload: res.data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
    }
}  