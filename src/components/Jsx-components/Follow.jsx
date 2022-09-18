import React from 'react';

const Follow = ({image, name}) => {
    return (
        <div className="newsfeed-container">
            <div className="profil">
                <div className='wrapper-img-username'>
                    <img className="profil-thumbnail-img" src={image} alt=""/>
                    <p className="username-right">{name}</p>
                </div>
                <div className="button-placement">
                    <button className="subscribe">S'abonner</button>
                </div>                    
            </div>
        </div>  
    );
};

export default Follow;