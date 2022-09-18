import React from 'react';


const TitleSection = ({title}) => {
    return (
        <div className='title-wrapper'>
            <p className="title-section">{title}</p>
            <a href="/" className='link-see-all'>Tout voir</a>
        </div>
    );
};

export default TitleSection;