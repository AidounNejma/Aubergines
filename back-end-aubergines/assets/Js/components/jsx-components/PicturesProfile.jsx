import React from 'react';
import '../../style/components/subcomponents/pictures-profile.scss';

const PicturesProfile = ({image, name, available, profilePicture, bannerName}) => {
    return (
        <button className='container-profile'>
            <div style={{background: `url(${image})`}} className={'profile-img ' + available + ' ' + profilePicture }>
            </div>
            <p className={bannerName}>{name}</p>
        </button>
    );
};

export default PicturesProfile;