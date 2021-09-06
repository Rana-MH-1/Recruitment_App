import React from 'react'
import styled from 'styled-components';
import resume from '../../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Lorem Ipsum</span></h4>
              
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Lorem Ipsum</p>
                        <p>: 36</p>
                        <p>: Spainsh </p>
                        <p>: Spanish, French, English </p>
                        <p>: London, United Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 65%;
            object-fit: cover;
            border-radius:20px;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-family: 'Berkshire Swash', cursive;
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                font-family: 'Berkshire Swash', cursive;
            }
        }
        
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 50;
                }
            }
            .info-title, .info{
                p{
                    padding: .2rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
