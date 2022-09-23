import React from 'react'
import NewsFeed from './NewsFeed';
import '../../assets/components/subcomponents/user-news-feed.scss';
import '../../assets/components/subcomponents/pictures-profile.scss';
import { importAll } from '../functions/ImportImages';

const UserNewsFeed = ({ icon1, icon2 }) => {

    const image = importAll(require.context(`../../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);

    return (
        <div>
            <div className="user-news-feed-layout" >            
                    <NewsFeed image={images[2]} />   
                <div>
                    <h3>
                        "Pourquoi ma vie est meilleure que la vôtre"
                    </h3>
                    <article>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
                    </article>
                    <div className="icons">
                        <div className="icon-display">
                            {icon1}
                        </div>
                        <div className="icon-display">
                            {icon2}
                        </div>
                    </div>
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
};

export default UserNewsFeed

