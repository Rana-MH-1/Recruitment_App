import React from "react";
import Myapply from "./Myapply";
import '../Components/Css/MyapplyList.css'

const MyapplyList = ({ myapplyList }) => {
  return (
    <div>
      <div className="container">
        <h5>Job</h5>
        <h5>Address</h5>
        <h5>Sent at</h5>
        <h5>CV</h5>
        <h5>Motivation Letter</h5>
      </div>
      {myapplyList.length &&
        myapplyList.map((MyApply) => (
          <Myapply key={MyApply._id} myapply={MyApply} />
        )).reverse()}
    </div>
  );
};

export default MyapplyList;
