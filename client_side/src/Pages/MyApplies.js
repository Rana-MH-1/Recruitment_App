import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyapplyList from '../Components/MyapplyList'
import { getMyApplies } from '../Redux/Actions/ApplyAction'

const MyApplies = () => {
    const User =useSelector(state=> state.Auth.User)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMyApplies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            {User.Role==='Candidate' && User.MyApplies && <MyapplyList myapplyList={User.MyApplies} /> }
        </>
    )
}

export default MyApplies
