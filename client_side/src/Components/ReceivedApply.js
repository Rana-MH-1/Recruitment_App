import React from "react";
import "./Css/ReceivedApply.css";
import Invite from "./invite";

const ReceivedApply = ({ receivedapply }) => {
  return (
    <div>
      <div className="contain">
        <p>{receivedapply.owner.FullName}</p>
        <p>{receivedapply.Post.jobTitle}</p>
        <p>{receivedapply.createdAt}</p>
        <Invite apply={receivedapply}/>
      </div>
      <hr />
    </div>
  );
};

export default ReceivedApply;
