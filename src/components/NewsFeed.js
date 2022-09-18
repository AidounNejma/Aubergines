import React from 'react';
import bbweed from '../assets/img/bbweed.png';
import '../assets/components/subcomponents/newsfeed.scss'


const NewsFeed = () => {
    return (
        <div className='newsfeed'>
            <h1>Fil d'actualités</h1>
            <div className="newsfeed-container">
                <div className='container-post'>
                    <img className="thumbnail-img" src={bbweed} alt="" />
                        <div className="thumbnail-container">
                            <img className="profil-thumbnail-img" src={bbweed} alt=""/>
                                <div className='post-informations'>
                                    <p className="pseudo">Julian Speed</p>   
                                    <p>Message de test user...</p> 
                                </div>                     
                        </div>
                </div>
                <div className='container-post'>
                    <img className="thumbnail-img" src={bbweed} alt="" />
                        <div className="thumbnail-container">
                            <img className="profil-thumbnail-img" src={bbweed} alt=""/> 
                                <div className='post-informations'>
                                    <p className="pseudo">Julian Speed</p>   
                                    <p>Message de test user...</p> 
                                </div>
                        </div> 
                </div>  
                <div className='container-post'>
                    <img className="thumbnail-img" src={bbweed} alt="" />
                        <div className="thumbnail-container">
                            <img className="profil-thumbnail-img" src={bbweed} alt=""/> 
                                <div className='post-informations'>
                                    <p className="pseudo">Julian Speed</p>   
                                    <p>Message de test user...</p> 
                                </div>
                        </div> 
                </div>    
                <div className='container-post'>
                    <img className="thumbnail-img" src={bbweed} alt="" />
                        <div className="thumbnail-container">
                            <img className="profil-thumbnail-img" src={bbweed} alt=""/> 
                                <div className='post-informations'>
                                    <p className="pseudo">Julian Speed</p>   
                                    <p>Message de test user...</p> 
                                </div>
                        </div> 
                </div>                                                                             
            </div>                
        </div>
    );
    };

export default NewsFeed;