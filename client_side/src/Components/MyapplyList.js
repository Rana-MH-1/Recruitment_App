import React from "react";
import Myapply from "./Myapply";
import '../Components/Css/MyapplyList.css'

const MyapplyList = ({ myapplyList }) => {
  const style={paddingTop:'24px'}
  return (
    <div>
      <div className="tabline">
        <h5 style={style}>Job</h5>
        <h5 style={style}>Address</h5>
        <h5 style={style}>Sent at</h5>
        <h5 style={style}>CV</h5>
        <h5 style={style}>Motivation Letter</h5>
      </div>
      {myapplyList.length &&
        myapplyList.map((MyApply) => (
          <Myapply key={MyApply._id} myapply={MyApply} />
        )).reverse()}
    </div>
  );
};

export default MyapplyList;
