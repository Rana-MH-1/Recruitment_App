import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/profile_components/ImageSection';
import Title from '../Components/profile_components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/profile_components/ServicesSection';
import ReviewsSection from '../Components/profile_components/ReviewsSetion';

function AboutPage() {
   

      
      
        return (
        
      

        <MainLayout style={{marginLeft:"180px"}}>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyled >
        </MainLayout>
     
    )
}

const AboutStyled = styled.section`
    
`;


export default AboutPage
