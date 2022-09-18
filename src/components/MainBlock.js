import React from 'react';
import '../assets/components/mainblock.scss';
import NewsFeed from './Jsx-components/NewsFeed';
import Stories from './Jsx-components/Stories';

const MainBlock = () => {

    return (

        <div className='mainBlock'>
            <Stories/>

            <div className='line'></div>

            <h1 className='title-timeline'>Fil d'actualités</h1>

            <div className='newsfeed-container'>
                <NewsFeed name="Julian Speed" message="Soirée à Tokyo trop..."/>
                <NewsFeed name="Kristen Mackenzie" message="Ma nouvelle déco..."/>
                <NewsFeed name="Sveltlana Flasuova" message="Aurore boréale ça m'inspire..."/>
                <NewsFeed name="Kylie Mansour" message="Trop de neige..."/>
            </div>

        </div>
    );
};

export default MainBlock;