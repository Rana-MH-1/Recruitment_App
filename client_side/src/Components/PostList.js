
import React from 'react'
import PostRecruiter from './Post'

const PostList = ({PostList}) => {
    return (
        <div>
            {PostList.length && PostList.map(post=> <PostRecruiter key={post._id} Post={post}/>).reverse()}
        </div>
    )
}

export default PostList
