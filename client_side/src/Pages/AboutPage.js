import React, { useEffect } from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/profile_components/ImageSection';
import Title from '../Components/profile_components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/profile_components/ServicesSection';
import ReviewsSection from '../Components/profile_components/ReviewsSetion';
import { useDispatch, useSelector } from 'react-redux';
import { getPostCount } from '../Redux/Actions/PostActions';
import { getCOUNTApplies } from '../Redux/Actions/ApplyAction';



function AboutPage() {
    const dispatch = useDispatch()
    const User = useSelector(state=> state.Auth.User)
    const count  = useSelector(state=> state.Posts.count)
    useEffect(() => {
        User.Role ==='Candidate' && dispatch(getCOUNTApplies());
        User.Role ==='Recruiter' && dispatch(getPostCount());
    },[])
      
        return (  
        <MainLayout style={{marginLeft:"180px"}}>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection count={User?.Role ==='Candidate' ? User.CountMyApplies : count} />
            </AboutStyled >
        </MainLayout>
        
     
    )
}

const AboutStyled = styled.section`
    
`;


export default AboutPage
