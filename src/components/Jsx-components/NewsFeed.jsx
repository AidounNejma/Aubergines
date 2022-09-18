import React from 'react';
import bbweed from '../../assets/img/bbweed.png';
import '../../assets/components/subcomponents/newsfeed.scss'


const NewsFeed = ({name, message}) => {
    return (
        <div className='container-post'>
            <img className="thumbnail-img" src={bbweed} alt="" />
            <div className="thumbnail-container">
                <img className="profil-thumbnail-img" src={bbweed} alt=""/>
                    <div className='post-informations'>
                        <p className="pseudo">{name}</p>   
                        <p>{message}</p> 
                    </div>                     
            </div>
        </div>                                                                             
    );
    };

export default NewsFeed;