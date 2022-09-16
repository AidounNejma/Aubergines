import React from 'react';
import bbweed from '../assets/img/bbweed.png';
import '../assets/components/newsfeed.scss'


const NewsFeed = () => {
    return (
        <div>
            <hr class="solid"></hr>
            <h1>Fil d'actualités</h1>
            <div className="newsfeed-container">
                <div>
                    <img className="thumbnail-img" src={bbweed} alt="" />
                        <div className="thumbnail-container">
                            <img className="profil-thumbnail-img" src={bbweed} alt=""/>
                                <div>
                                    <p className="pseudo">Julian Speed</p>   
                                    <p>"Message de test user...</p> 
                                </div>                     
                        </div>
                </div>
                <div>
                    <img className="thumbnail-img" src={bbweed} alt="" />
                        <div className="thumbnail-container">
                            <img className="profil-thumbnail-img" src={bbweed} alt=""/> 
                                <div>
                                    <p className="pseudo">Julian Speed</p>   
                                    <p>"Message de test user...</p> 
                                </div>
                        </div> 
                </div>  
                <div>
                    <img className="thumbnail-img" src={bbweed} alt="" />
                        <div className="thumbnail-container">
                            <img className="profil-thumbnail-img" src={bbweed} alt=""/> 
                                <div>
                                    <p className="pseudo">Julian Speed</p>   
                                    <p>"Message de test user...</p> 
                                </div>
                        </div> 
                </div>    
                <div>
                    <img className="thumbnail-img" src={bbweed} alt="" />
                        <div className="thumbnail-container">
                            <img className="profil-thumbnail-img" src={bbweed} alt=""/> 
                                <div>
                                    <p className="pseudo">Julian Speed</p>   
                                    <p>"Message de test user...</p> 
                                </div>
                        </div> 
                </div>                                                                             
            </div>                
        </div>
    );
    };

export default NewsFeed;