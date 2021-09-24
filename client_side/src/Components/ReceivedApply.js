/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Css/ReceivedApply.css";
import Invite from "./invite";

const ReceivedApply = ({ receivedapply }) => {
  return (
    <div>
      { (receivedapply.Post===null)? null : (<>
      <div className="contain">
        
        <p>{receivedapply.owner.FullName}</p>
        
        {(receivedapply.Post===null)? null : <p>{receivedapply?.Post?.jobTitle}</p>}
        <p>{receivedapply.createdAt.substring(0, 10)}</p>
        <a style={{textDecoration:'none'}} href={receivedapply.CV} target="_blank" rel='noopener noreferrer' >CV</a>
        <a style={{textDecoration:'none'}} href={receivedapply.Motivation_letter} target="_blank" rel='noopener noreferrer'>Motivation Letter</a>
        <Invite apply={receivedapply}/>
      </div>

      <hr style={{border:'1px solid #68bfdb',opacity:1}}/>
      </>)
}
    </div>
  );
};

export default ReceivedApply;
