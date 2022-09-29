import React from 'react';
import PicturesProfile from './PicturesProfile';
import '../../../styles/components/subcomponents/banner.scss';

const ProfileBanner = ({image, user}) => {
  
  return (
    
    <div style={{background: `url(${image})`}} className="profile-banner">
      <PicturesProfile profilePicture="profile-picture" bannerName="banner-p" image={user.userPictures} name={user.username}/>
    </div>
    
  );
};

export default ProfileBanner;