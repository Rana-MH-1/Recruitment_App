import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../../styles/Layouts';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../../img/design.svg';
import {useSelector} from 'react-redux';


function ServicesSection() {
        const User = useSelector(state=> state.Auth.User)

    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={User?.Role==='Candidate'? 'Specialty' : 'Profession'} span={User?.Role==='Candidate'? 'Specialty' : 'Profession'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={User?.Role==='Candidate'? User.Specialty : User.Profession} 
                        
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        width:300px;
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
