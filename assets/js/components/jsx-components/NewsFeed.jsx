import React from 'react';
import '../../../styles/components/subcomponents/newsfeed.scss'


const NewsFeed = ({name, message, image, profile, id}) => {
    return (
            <div className='container-post'>
                <img className="thumbnail-img" src={image} alt="" />
                <div className="thumbnail-container">
                    <a href={"profil/" + id} className="profil-thumbnail-img">
                        <img src={profile} alt=""/>
                    </a>

                    <a href="/" className='post-informations' style={{color : 'black'}}>
                        <p className='pseudo'>{name}</p>   
                        <p>{message}</p> 
                    </a>                     
                </div>
            </div>                                                                             
        );
    };

export default NewsFeed;