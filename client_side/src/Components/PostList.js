
import React from 'react'
import PostRecruiter from './Post'

const PostList = ({PostList,page,limit}) => {
    return (
        <div>
            {PostList.length && PostList.map(post=> <PostRecruiter key={post._id} Post={post} page={page} limit={limit} />)}
        </div>
    )
}

export default PostList
