import React from 'react';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed'

const Home = () => {
    return (
        <div>
            <NewsFeed/>
            <Sidebar/>           
        </div>
        
    );
};

export default Home;