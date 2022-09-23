import React from 'react'
import ProfileBanner from './jsx-components/ProfileBanner'
import UserNewsFeed from './jsx-components/UserNewsFeed';
import { FaHeart, FaRegCommentDots} from 'react-icons/fa';
import {importAll} from './functions/ImportImages';



const UserProfile = () => {

    /* Import de mes images */
    const banner = importAll(require.context(`../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));
    const banners = Object.values(banner);


  return (
    <div className='user-profile'>
        <ProfileBanner image={banners[1]}/>
        <UserNewsFeed icon1={<FaHeart className='heart' color="red"/>} icon2={<FaRegCommentDots className='comment' color="black"/>}/>  
        <UserNewsFeed icon1={<FaHeart className='heart' color="red"/>} icon2={<FaRegCommentDots className='comments' color="black"/>}/>
        <UserNewsFeed icon1={<FaHeart className='heart' color="red"/>} icon2={<FaRegCommentDots className='comments' color="black"/>}/>              
    </div>   
  )
}

export default UserProfile