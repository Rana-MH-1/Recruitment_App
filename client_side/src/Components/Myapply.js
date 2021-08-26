
import React from 'react'
import '../Components/Css/Myapply.css'

const Myapply = ({myapply}) => {
    return (
        <div>
        <div className='containeer'>
            {console.log(myapply)}
            <p>{myapply.Post.jobTitle}</p>
            <p>{myapply.Post.Address}</p>
            <p>{myapply.createdAt}</p>
            
        </div>
        <hr/>
        </div>
    )
}

export default Myapply
