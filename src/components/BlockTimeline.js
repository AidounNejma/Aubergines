import React from 'react';
import {importAll} from './functions/ImportImages';
import NewsFeed from './jsx-components/NewsFeed';

const BlockTimeline = () => {
    /* Import de mes images */
    const image = importAll(require.context(`../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);

    /* Import profile pictures */
    const profile = importAll(require.context(`../assets/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
    const profiles = Object.values(profile);

    return (
        <div>
            <h1 className='title-timeline'>Fil d'actualités</h1>

            <div className='newsfeed-container'>
                <NewsFeed name="Kristen Mackenzie" message="Ma nouvelle déco..." image={images[0]} profile={profiles[0]}/>
                <NewsFeed name="Mily Arthur" message="Soirée à Tokyo trop..." image={images[1]} profile={profiles[1]} />
                <NewsFeed name="Julian Speed" message="Aurore boréale ça m'inspire..." image={images[2]} profile={profiles[2]} />
                <NewsFeed name="Sveltlana Flasuova" message="Trop de neige..." image={images[3]} profile={profiles[3]} />
            </div>
        </div>
    );
};

export default BlockTimeline;