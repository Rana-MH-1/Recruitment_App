import React from 'react'
import styled from 'styled-components';

function ReviewItem({text}) {
    return (
        <RevivewItemStyled>
            <h1>{text}</h1>
        </RevivewItemStyled>
    )
}

const RevivewItemStyled = styled.div`
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    &:not(:first-child){
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    h1{
        font-size:40px;
    }
`;

export default ReviewItem;
