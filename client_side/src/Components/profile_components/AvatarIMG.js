import React from "react";
import styled from "styled-components";
import "./avatar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AvatarIMG() {
  const User = useSelector((state) => state.Auth.User);

  return (
    <div className="avatar">
      <Link to={`/Profile/${User?._id}`}>
        <img
          src={
            User?.image
              ? User.image?.url
              : "https://png.pngtree.com/png-clipart/20200701/original/pngtree-black-default-avatar-png-image_5407174.jpg"
          }
          alt=""
        />
      </Link>
    </div>
  );
}

export default AvatarIMG;
