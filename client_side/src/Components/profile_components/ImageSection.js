import React, { useState } from 'react'
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import { EditProfile } from '../../Redux/Actions/AuthAction';

function ImageSection() {
    const dispatch = useDispatch()
    const User = useSelector(state=> state.Auth.User)
    const [isEdited, setIsEdited] = useState(false);
    const [infoCandidate, setInfoCandidate] = useState({
        _id:User._id,
        FullName:'',
        Email:'',
        LevelStudy:'',
        Specialty:'',

    })

    const [infoRecruiter, setInfoRecruiter] = useState({
        _id:User._id,
        FullName:'',
        Email:'',
        Profession:'',
        SocietyName:'',
        ActivityField:'',
        Category:'',
        taxRegistrationNumber:null
    })

    const handleCandidateInfoChange = (e) => {
        setInfoCandidate({ ...infoCandidate, [e.target.name]: e.target.value });
      };

      const handleRecruiterInfoChange = (e) => {
        setInfoRecruiter({ ...infoRecruiter, [e.target.name]: e.target.value });
      };

      const EditingProfile=()=>{
        setIsEdited(!isEdited);
        User.Role==='Candidate'&& setInfoCandidate({...infoCandidate,
        FullName:User.FullName,
        Email:User.Email,
        LevelStudy: User.LevelStudy,
        Specialty:User.Specialty
    })

    User.Role==='Recruiter' && setInfoRecruiter({...infoRecruiter,
        FullName:User.FullName,
        Email:User.Email,
        Profession:User.Profession,
        SocietyName:User.SocietyName,
        ActivityField:User.ActivityField,
        Category:User.Category,
        taxRegistrationNumber:User.taxRegistrationNumber
    })
     if(isEdited && User !== infoCandidate){
        User.Role==='Candidate' && dispatch(EditProfile(infoCandidate))
        User.Role==='Recruiter' && dispatch(EditProfile(infoRecruiter))
      }
    }
       

    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={User.image? User.image?.url : "https://png.pngtree.com/png-clipart/20200701/original/pngtree-black-default-avatar-png-image_5407174.jpg" } alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>{User.FullName}</span></h4>
              
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Email</p>
                        {User?.Role ==='Candidate' && (<>
                        <p>Level of Study </p>
                        <p>Specialty </p></>)}

                        {User?.Role==='Recruiter' && (<>
                        <p>Profession</p>
                        <p>SocietyName</p>
                        <p>ActivityField</p>
                        <p>Category</p>
                        <p>taxRegistrationNumber</p>
                        </>)}
                    </div>
                    {!isEdited ?<div className="info">
                        <p>: {User?.FullName && User?.FullName}</p>
                        <p>: {User?.Email && User?.Email}</p>
                        {User?.Role ==='Candidate' && (<>
                        <p>: {User?.LevelStudy && User.LevelStudy} </p>
                        <p>: {User?.Specialty && User.Specialty} </p>
                        </>)}

                        {User?.Role==='Recruiter' && (<>
                        <p>: {User.Profession}</p>
                        <p>: {User.SocietyName}</p>
                        <p>: {User.ActivityField}</p>
                        <p>: {User.Category}</p>
                        <p>: {User.taxRegistrationNumber}</p>
                        </>)}
                    </div>
                    :
                    <div className="info">
                        {User.Role ==='Candidate' && (<div className="contain">
                        <div class="ui input"><input type="text" name='FullName' value={infoCandidate.FullName} onChange={handleCandidateInfoChange} /></div>
                        <div class="ui input"><input type="text" name='Email' value={infoCandidate.Email} onChange={handleCandidateInfoChange} /></div>
                        <div class="ui input"><input type="text" name='LevelStudy' value={infoCandidate.LevelStudy} onChange={handleCandidateInfoChange} /></div>
                        <div class="ui input"><input type="text" name='Specialty' value={infoCandidate.Specialty} onChange={handleCandidateInfoChange} /></div>
                        </div>)}
                        <div className='containR'>
                        {User.Role ==='Recruiter' && (<>
                        <div class="ui input"><input type="text" name='FullName' value={infoRecruiter.FullName} onChange={handleRecruiterInfoChange} /></div>
                        <div class="ui input"><input type="text" name='Email' value={infoRecruiter.Email} onChange={handleRecruiterInfoChange} /></div>
                        <div class="ui input"><input type="text" name='Profession' value={infoRecruiter.Profession} onChange={handleRecruiterInfoChange} /></div>
                        <div class="ui input"><input type="text" name='SocietyName' value={infoRecruiter.SocietyName} onChange={handleRecruiterInfoChange} /></div>
                        <div class="ui input"><input type="text" name='ActivityField' value={infoRecruiter.ActivityField} onChange={handleRecruiterInfoChange} /></div>
                        <div class="ui input"><input type="text" name='Category' value={infoRecruiter.Category} onChange={handleRecruiterInfoChange} /></div>
                        <div class="ui input"><input type="text" name='taxRegistrationNumber' value={infoRecruiter.taxRegistrationNumber} onChange={handleRecruiterInfoChange} /></div>
                        </>)}
                        </div>
                    </div>}
                    
                </div>
                <button className='button' onClick={EditingProfile}>{isEdited ? 'Update' : 'Edit'}</button>
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
                    font-size:16px;
                }
            }
        }
    }
    .button{
        background-color:black;
    padding: .8rem 2.5rem;
    border-radius:10px;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }

    }
    .contain{
        display:grid;
        grid-template-columns:auto;
        grid-row-gap:10px
    }

    .containR{
        display:grid;
        grid-template-columns:auto;
        grid-row-gap:10px
    }
`;
export default ImageSection;
