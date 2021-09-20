import * as MeetingTypes from './MeetingTypes';
import {startLoading,stopLoading,setError,clearError} from './AppStateActions'
import { setToken } from '../../helpers/setToken';
import axios from 'axios';
import { prefixe } from '../../helpers/prefixe';
import {setApplyId} from "../../helpers/setApplyId";

export const SaveMeeting=(meeting)=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("save meeting ..."))
    try{
        setApplyId();
        const {data} = await axios.post(`${prefixe}/api/meeting/add`,meeting)
        dispatch({
            type: MeetingTypes.ADD_MEETING_SUCCESS,
            payload: data
        })
        dispatch(stopLoading());
        dispatch(getRecruiterMeeting())        
    }
    catch(err){
        dispatch(setError(err.response?.data?.errors))
        dispatch(stopLoading())
    }
}

export const getRecruiterMeeting =()=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("get R meeting List..."))
    try{
        setToken()
        setApplyId();
        const {data} = await axios.get(`${prefixe}/api/meeting/RecruiterMeeting`)
        dispatch({
            type: MeetingTypes.GET_MEETINGLIST_R_SUCCESS,
            payload: data
        })
        dispatch(stopLoading());
        
    }
    catch(err){
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
        
    }
}

export const getCandidateMeeting =()=> async(dispatch)=>{
    
    dispatch(clearError())
    dispatch(startLoading("get C meeting List..."))
    try{
        setToken()
        setApplyId();
        const {data} = await axios.get(`${prefixe}/api/meeting/CandidateMeeting`)
        dispatch({
            type: MeetingTypes.GET_MEETINGLIST_C_SUCCESS,
            payload: data
        })
        dispatch(stopLoading());
        
    }
    catch(err){
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
        
    }
}

export const DeleteMeeting = (id) => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Deleting Meeting..."))
    try {
        setToken()
        const res = await axios.delete(`${prefixe}/api/meeting/deleteMeeting/${id}`)
        dispatch({
            type: MeetingTypes.DELETING_Meeting_SUCCESS,
            payload: res.data
        })
        dispatch(stopLoading())
        
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
    }
} 

export const DeleteMeetingCandidate = (id) => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Deleting Meeting..."))
    try {
        setToken()
        const res = await axios.delete(`${prefixe}/api/meeting/deleteMeeting/${id}`)
        dispatch({
            type: MeetingTypes.DELETING_Meeting_CANDIDATE_SUCCESS,
            payload: res.data
        })
        dispatch(stopLoading())
        
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response?.data?.errors))
    }
} 