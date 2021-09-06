import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReceivedApplyList from '../Components/ReceivedApplyList'
import { getReceivedApplies } from '../Redux/Actions/ApplyAction'

const ReceivedApplies = () => {

    const User = useSelector(state=> state.Auth.User)
    
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getReceivedApplies())
    },[])

    return (
        <div>
            {User.Role==='Recruiter' && User.Appliesreceived && <ReceivedApplyList receivedapplylist={User.Appliesreceived} />}
        </div>
    )
}

export default ReceivedApplies
