import React from 'react';
import '../assets/components/mainblock.scss';
import NewsFeed from '../components/NewsFeed';
import Stories from './Stories';

const MainBlock = () => {

    return (
        <div className='mainBlock'>
            <Stories/>
            <NewsFeed/>
        </div>
    );
};

export default MainBlock;