import React from 'react'
import ReceivedApply from './ReceivedApply'

const ReceivedApplyList = ({receivedapplylist}) => {
    return (
        <div>
            <div className='oneline'>
                <h5>Candidate</h5>
                <h5>Applied on</h5>
                <h5>Sent at</h5>
                <h5>CV</h5>
                <h5>Motivation Letter</h5>
            </div>
            {receivedapplylist.length && receivedapplylist.map(apply=> <ReceivedApply key={apply._id} receivedapply={apply} />).reverse()}
        </div>
    )
}

export default ReceivedApplyList
