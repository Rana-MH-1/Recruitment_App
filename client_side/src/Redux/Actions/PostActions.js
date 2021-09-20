import axios from 'axios';
import { prefixe } from '../../helpers/prefixe';
import {startLoading,stopLoading,setError,clearError} from './AppStateActions'
import { setToken } from '../../helpers/setToken';
import * as types from './PostTypes'

export const PostAction=(newPost,page,limit)=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("Adding post ..."))
    try{
        setToken()
        const {data} = await axios.post(`${prefixe}/api/Posts/postReruiter`,newPost)
        dispatch({
            type: types.ADD_POST_SUCCESS,
            payload: data
        })
        dispatch(getPostsAction(page,limit))
        dispatch(getPostCount())

    }
    catch(err){
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
        
    }
}

export const getPostsAction=(page,limit)=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("get all Posts"))
    try{
        const {data} = await axios.get(`${prefixe}/api/Posts/AllPosts?page=${page}&limit=${limit}`)
        dispatch({
            type: types.GET_POSTS_SUCCESS,
            payload: data
        })
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

export const getMyPostCount = () => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Get My PostsCount..."))
    try {
        setToken()
        const { data } = await axios.get(`${prefixe}/api/Posts/MyPostsCount`)
        dispatch({
            type: types.GE_MY_POSTS_COUNT_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}

export const EditPost = (EditedPost,page,limit) => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Editing Posts..."))
    try {
        setToken()
        const res = await axios.put(`${prefixe}/api/Posts/EditPosts/${EditedPost._id}`,EditedPost)
        dispatch({
            type: types.EDIT_POST_SUCCESS,
            payload: res.data
        })
        dispatch(stopLoading())
        dispatch(getPostsAction(page,limit))
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
        setToken()
        const res = await axios.delete(`${prefixe}/api/Posts/DeletePost/${id}`)
        dispatch({
            type: types.DELETE_POST_SUCCESS,
            payload: res.data
        })
        dispatch(stopLoading())
        dispatch(getPostCount())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
    }
} 

export const getPostCount = () => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Get post count"))
    try {
        const { data } = await axios.get(`${prefixe}/api/Posts/postcount`)
        dispatch({
            type: types.GET_POST_COUNT_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
    }
}

export const FiltrePosts=(search)=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(getPostsAction())
    dispatch(startLoading("get data search by Title"))
    try{
        const {data} = await axios.get(`${prefixe}/api/Posts/FilterPosts?search=${search}`)
        dispatch({
            type: types.FILTER_POSTS_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch(err){
        dispatch(setError(err.response?.data?.errors))
        dispatch(stopLoading())
    }
}

