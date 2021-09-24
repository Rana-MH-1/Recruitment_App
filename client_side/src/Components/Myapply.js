import React from "react";
import "../Components/Css/Myapply.css";

const Myapply = ({ myapply }) => {
  return (
    <div>
      {myapply.Post === null ? null : (
        <>
          <div className="containeer">
            {myapply.Post?.jobTitle && <p>{myapply.Post.jobTitle}</p>}
            {myapply.Post?.Address && <p>{myapply.Post.Address}</p>}
            {myapply.createdAt && <p>{myapply.createdAt.substring(0, 10)}</p>}
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a
              style={{ textDecoration: "none" }}
              href={myapply.CV}
              target="_blank"
            >
              CV
            </a>
           { /*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a
              style={{ textDecoration: "none" }}
              href={myapply.Motivation_letter}
              target="_blank"
            >
              Motivation Letter
            </a>
          </div>
          <hr style={{ width: "1140px", margin: "auto",border:'1px solid #fbf4e9',opacity:'1' }} />
        </>
      )}
    </div>
  );
};

export default Myapply;
