import React from 'react';
import PicturesProfile from './PicturesProfile';
import {importAll} from '../functions/ImportImages';
import '../../../styles/components/subcomponents/banner.scss';

const ProfileBanner = ({image}) => {

  const profil = importAll(require.context(`../../../styles/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
  const profils = Object.values(profil);

  return (
    
    <div style={{background: `url(${image})`}} className="profile-banner">
      <PicturesProfile profilePicture="profile-picture" bannerName="banner-p" image={profils[1]} name="Tony Montana"/>
    </div>
    
  );
};

export default ProfileBanner;