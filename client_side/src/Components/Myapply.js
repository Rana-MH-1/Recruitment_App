
import React from 'react'
import '../Components/Css/Myapply.css'

const Myapply = ({myapply}) => {
    return (
        <div>
        <div className='containeer'>
            {myapply.Post?.jobTitle && <p>{myapply.Post.jobTitle}</p>}
            {myapply.Post?.Address && <p>{myapply.Post.Address}</p>}
            {myapply.createdAt && <p>{myapply.createdAt}</p>}
            
        </div>
        <hr/>
        </div>
    )
}

export default Myapply
