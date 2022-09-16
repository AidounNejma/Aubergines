import React from 'react';
import '../assets/components/sidebarright.scss'
import '../assets/components/newsfeed.scss'
import bbweed from '../assets/img/bbweed.png';
import SearchBar from './SearchBar';

const SidebarRight = () => {
    return (
        <div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <p className="side-bar-title">les personnes à suivre</p>
            </div>           
            <div className="newsfeed-container-test">
                <div className="profil">
                    <img className="profil-thumbnail-img-sidebarrigth" src={bbweed} alt=""/>
                    <p className="pseudo-right">Julian Speed</p>
                        <div className="button-placement">
                            <button className="subscribe">s'abonner</button>
                        </div>                    
                </div>
            </div>         
            <div className="newsfeed-container-test">
                <div className="profil">
                    <img className="profil-thumbnail-img-sidebarrigth" src={bbweed} alt=""/>
                    <p className="pseudo-right">Eva Langoria</p>
                        <div className="button-placement">
                            <button className="subscribe">s'abonner</button>
                        </div>                    
                </div>
            </div>          
            <div className="newsfeed-container-test">
                <div className="profil">
                    <img className="profil-thumbnail-img-sidebarrigth" src={bbweed} alt=""/>
                    <p className="pseudo-right">Clara Anagrom</p>
                        <div className="button-placement">
                            <button className="subscribe">s'abonner</button>
                        </div>                    
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
};

export default SidebarRight;