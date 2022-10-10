import React from 'react';

const ShowPost = ({post}) => {
    return (
        <div className='show-post'>
            <img src={post.picturesPost} alt="" />
        </div>
    );
};

export default ShowPost;