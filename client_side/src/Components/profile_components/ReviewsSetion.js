import styled from 'styled-components';
import {InnerLayout} from '../../styles/Layouts';
import Title from './Title';
import ReviewItem from './ReviewItem';
import {useSelector} from 'react-redux';





function ReviewsSetion({count}) {
    const User = useSelector(state=> state.Auth.User)


return(
        <ReviewsStyled>
            <Title title={User.Role==='Recruiter'? 'Number of Posts' : 'My applies'} span={User.Role==='Recruiter'? 'Number of Posts' : 'My applies'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={count} 
                    />
                    
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
       
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
