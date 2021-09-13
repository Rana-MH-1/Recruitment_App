import React,{useEffect} from "react";
import { useSelector,useDispatch} from "react-redux";
import MyMeetingList from "../Components/MyMeetingList";
import {getRecruiterMeeting,getCandidateMeeting} from '../Redux/Actions/MeetingAction'

const MyMeeting = () => {
  const dispatch = useDispatch()
  const User = useSelector(state=> state.Auth.User)
  useEffect(() => {
   User.Role ==='Recruiter' && dispatch(getRecruiterMeeting())
   User.Role ==='Candidate' && dispatch(getCandidateMeeting())
 },[])

  return (
    <div>
      {(User.R_Meeting_List ||User.C_Meeting_List) && <MyMeetingList myMeetingList={(User.Role==='Recruiter')? User.R_Meeting_List : User.C_Meeting_List} />}
      {/*(User.Role ==='Recruiter'? User.R_Meeting_List.length===0 : User.C_Meeting_List.length===0) && <h1>You have 0 meeting</h1>*/ }
    </div>
  );
};

export default MyMeeting;
