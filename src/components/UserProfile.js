import React from 'react'
import ProfileBanner from './jsx-components/ProfileBanner'
import UserNewsFeed from './jsx-components/UserNewsFeed';
import { FaHeart } from 'react-icons/fa';
import {importAll} from './functions/ImportImages';



const UserProfile = () => {

    /* Import de mes images */
    const banner = importAll(require.context(`../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));
    const banners = Object.values(banner);


  return (
    <div>
        <ProfileBanner image={banners[1]}/>
        <UserNewsFeed icon={<FaHeart className='heart' color="red"/>}/>  
        <UserNewsFeed icon={<FaHeart className='heart' color="red"/>}/>             
    </div>   
  )
}

export default UserProfile