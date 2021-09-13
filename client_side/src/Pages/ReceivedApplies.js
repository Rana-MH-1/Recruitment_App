import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FiltreApply from '../Components/FiltreApply'
import ReceivedApplyList from '../Components/ReceivedApplyList'
import { getReceivedApplies } from '../Redux/Actions/ApplyAction'


const ReceivedApplies = () => {

    const User = useSelector(state=> state.Auth.User)
    const [search,setSearch] = useState("")
    const [fieled,setFieled] = useState('')
    const handleField =(selectedField) => setFieled(selectedField)
    const handleSearchChange=(Search)=>setSearch(Search)
    const FilteringApply = (search,fieled)=>{
        switch(fieled) {
            case 'Candidate':
              return User.Appliesreceived.filter(apply=>apply.owner.FullName.toLowerCase().trim().includes(search.toLowerCase().trim()));
              case 'Applied on':
                  return User.Appliesreceived.filter(apply=>apply.Post.jobTitle.toLowerCase().trim().includes(search.toLowerCase().trim()));
            default:
              return User.Appliesreceived;
          }
    }
    
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getReceivedApplies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
        
            <FiltreApply handleField={handleField} handleSearchChange={handleSearchChange} />
        <div>
            {User.Role==='Recruiter' && User.Appliesreceived && <ReceivedApplyList receivedapplylist={FilteringApply(search,fieled)} />}
        </div>
        </div>
    )
}

export default ReceivedApplies
