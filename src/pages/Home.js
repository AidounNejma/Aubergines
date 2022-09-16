import React from 'react';
import MainBlock from '../components/MainBlock';
import RightBlock from '../components/RightBlock';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div>
            <Sidebar/>
            <MainBlock/>
            <RightBlock/>
        </div>
    );
};

export default Home;