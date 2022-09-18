import React from 'react';

const PicturesProfile = ({image, name}) => {
    return (
        <div className='container-profile'>
            <div style={{background: `url(${image})`}} className='profile-img'>
            </div>
            <p>{name}</p>
        </div>
    );
};

export default PicturesProfile;