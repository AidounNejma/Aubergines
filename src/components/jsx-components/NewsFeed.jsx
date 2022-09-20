import React from 'react';
import '../../assets/components/subcomponents/newsfeed.scss'


const NewsFeed = ({name, message, image, profile}) => {
    return (
        <div className='container-post'>
            <img className="thumbnail-img" src={image} alt="" />
            <div className="thumbnail-container">
                <img className="profil-thumbnail-img" src={profile} alt=""/>
                    <div className='post-informations'>
                        <p className={'pseudo'}>{name}</p>   
                        <p>{message}</p> 
                    </div>                     
            </div>
        </div>                                                                             
    );
    };

export default NewsFeed;