import React from 'react'
import NewsFeed from './NewsFeed';
import '../../assets/components/subcomponents/user-news-feed.scss';
import '../../assets/components/subcomponents/pictures-profile.scss';
import {importAll} from '../functions/ImportImages';

const UserNewsFeed = ({icon}) => {

    const image = importAll(require.context(`../../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);

  return (
    
    <div className="user-news-feed-layout" >
        <div>            
            <NewsFeed image={images[2]}  />
        </div>
        <div>
            <h3>
                "Pourquoi ma vie est meilleure que la vôtre"
            </h3>            
            <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
            </article>  
            {icon}         
        </div> 
    </div>
  );
};

export default UserNewsFeed

