import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../../img/avatar.jpg';
import './avatar.css'

function AvatarIMG() {
    return (
      
            <div className="avatar"> 
                <img src={avatar} alt=""/>
            </div>
    )
}


export default AvatarIMG;
