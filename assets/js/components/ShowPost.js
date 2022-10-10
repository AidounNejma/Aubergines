import React from 'react';
import { FaCommentDots, FaHeart } from 'react-icons/fa';
import '../../styles/components/show-post.scss';
import ButtonIcons from './jsx-components/ButtonIcons';
import Comment from './jsx-components/Comment';

const ShowPost = ({post}) => {
    return (
        <div className='show-post'>
            <div className='container-image'>
                <img className='image-post' src={post.picturesPost} alt="" />
            </div>
            
            <div className='container-content'>
                <h1 className='title-post'>{post.title}</h1>
                <p className='content-post'>{post.content}</p>

                <div className='container-buttons-action'>
                    <ButtonIcons icon={<FaCommentDots/>}/>
                    <ButtonIcons icon={<FaHeart/>}/>
                </div>

                <div className='line'></div>
                
                <div className='comments-container'>
                    <Comment post={post}/>
                </div>
                
                
            </div>
        </div>
    );
};

export default ShowPost;