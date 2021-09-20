import React from 'react'
import styled from 'styled-components';
import {useSelector} from 'react-redux'

function Title({title, span}) {
    const User = useSelector(state=> state.Auth.User)
    return (
        <TitleStyled>
            <h5>{title} <b><span style={{color: User.Role==='Recruiter'? '#78d8e8' :'#ed6034'}}>{span}</span></b></h5>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h5{
        color: var(--white-color);
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        @media screen and (max-width: 496px){
            font-size: 1.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 1rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            font-size: 2rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 1.8rem;
            }
            @media screen and (max-width: 496px){
                font-size: 1rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }
        }
    }
`;

export default Title;
