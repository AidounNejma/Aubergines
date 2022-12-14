import React from 'react';
import '../../../styles/components/subcomponents/picture-profile.scss';

const PicturesProfile = ({image, name, available}) => {
    return (
        <button className='container-profile'>
            <div style={{background: `url(${image})`}} className={'profile-img ' + available }>
            </div>
            <p>{name}</p>
        </button>
    );
};

export default PicturesProfile;