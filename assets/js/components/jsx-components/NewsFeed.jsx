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
                    
                    <Link to={"/profil/" + id} className="profile-thumbnail-img">
                        <img src={profile} alt=""/>
                    </Link>

                    <div className='post-informations'>
                        <Link to={"/profil/" + id} className='pseudo'>{name}</Link>   
                        <Link to={`/post/`+ post.id} className='title-post'>{message}</Link> 
                    </div>                     
                </div>

            </div>                                                                             
        );
    };

export default NewsFeed;