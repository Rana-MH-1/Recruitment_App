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
        <a style={{textDecoration:'none'}} href={receivedapply.CV} target="_blank" >CV</a>
        <a style={{textDecoration:'none'}} href={receivedapply.Motivation_letter} target="_blank">Motivation Letter</a>
        <Invite apply={receivedapply}/>
      </div>

      <hr/>
      </>)
}
    </div>
  );
};

export default ReceivedApply;
