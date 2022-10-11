import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/components/subcomponents/newsfeed.scss'


const NewsFeed = ({name, message, image, profile, id, post}) => {
    return (
            <div className='container-post'>
                <Link to={`/post/`+ post.id}>
                    <img className="thumbnail-img" src={image} alt="" />
                </Link>

                <div className="thumbnail-container" >
                    
                    <Link to={"/profil/" + id} className="profil-thumbnail-img">
                        <img src={profile} alt=""/>
                    </Link>

                    <Link to={`/post/`+ post.id} className='post-informations' style={{color : 'black'}}>
                        <p className='pseudo'>{name}</p>   
                        <p>{message}</p> 
                    </Link>                     
                </div>
            </div>                                                                             
        );
    };

export default NewsFeed;