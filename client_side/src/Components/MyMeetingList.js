import React from 'react'
import MyMeeting from './MyMeeting'
import '../Components/Css/MyMeeting.css'

const MyMeetingList = ({myMeetingList}) => {
    return (
        <div className="MymeetingList">
            {myMeetingList.length && myMeetingList.map(mymeeting=> <MyMeeting key={mymeeting._id} myMeeting={mymeeting}/>)}
        </div>
    )
}

export default MyMeetingList
