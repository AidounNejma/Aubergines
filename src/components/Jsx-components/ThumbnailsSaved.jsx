import React from 'react';

const ThumbnailsSaved = ({image}) => {
    return (
        <div className='thumbnail' style={{background: `url(${image})`}}></div>
    );
};

export default ThumbnailsSaved;