import React from 'react';
import '../assets/components/mainblock.scss';
import NewsFeed from './Jsx-components/NewsFeed';
import Stories from './Jsx-components/Stories';

const MainBlock = () => {

    /* Import de toutes les images */
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context(`../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));

    const objects = Object.values(images);

    return (

        <div className='mainBlock'>
            <Stories/>

            <div className='line'></div>

            <h1 className='title-timeline'>Fil d'actualités</h1>

            <div className='newsfeed-container'>
                <NewsFeed name="Julian Speed" message="Ma nouvelle déco..." image={objects[0]} />
                <NewsFeed name="Kristen Mackenzie" message="Soirée à Tokyo trop..." image={objects[1]} />
                <NewsFeed name="Sveltlana Flasuova" message="Aurore boréale ça m'inspire..." image={objects[2]}/>
                <NewsFeed name="Kylie Mansour" message="Trop de neige..." image={objects[3]}/>
            </div>

        </div>
    );
};

export default MainBlock;