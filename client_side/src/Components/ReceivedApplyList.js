import React from 'react'
import ReceivedApply from './ReceivedApply'

const ReceivedApplyList = ({receivedapplylist}) => {
    const style={paddingTop:'25px'}
    const style1={paddingTop:'25px',paddingRight:'40px'}
    
    return (
        <div>
            <div className='oneline' style={{backgroundColor:'#68bfdb'}}>
                <h5 style={style}>Candidate</h5>
                <h5 style={style}>Applied on</h5>
                <h5 style={style1}>Sent at</h5>
                <h5 style={style1}>CV</h5>
                <h5 style={style1}>Motivation Letter</h5>
            </div>
            {receivedapplylist.length && receivedapplylist.map(apply=> <ReceivedApply key={apply._id} receivedapply={apply} />).reverse()}
        </div>
    )
}

export default ReceivedApplyList
