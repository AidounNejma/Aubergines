import React from 'react'
import NewsFeed from '../../components/jsx-components/NewsFeed';
import '../../style/components/subcomponents/user-news-feed.scss';
import { importAll } from '../functions/ImportImages';

const UserNewsFeed = ({ icon1, icon2 }) => {

    const image = importAll(require.context(`../../style/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);

    const profil = importAll(require.context(`../../style/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
    const profils = Object.values(profil);

    return (

        <div className="user-news-feed-layout" >
                <NewsFeed image={images[2]} profile={profils[1]}/>
            <div className='container-text-post'>
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
    );
};

export default UserNewsFeed

