import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/components/subcomponents/newsfeed.scss'


const NewsFeed = ({name, message, image, profile, id, post}) => {
    return (
            <Link to={`/post/`+ post.id} className='container-post'>
                <img className="thumbnail-img" src={image} alt="" />
                <div className="thumbnail-container" >
                    
                    <Link to={"/profil/" + id} className="profil-thumbnail-img">
                        <img src={profile} alt=""/>
                    </Link>

                    <div className='post-informations' style={{color : 'black'}}>
                        <p className='pseudo'>{name}</p>   
                        <p>{message}</p> 
                    </div>                     
                </div>
            </Link>                                                                             
        );
    };

export default NewsFeed;