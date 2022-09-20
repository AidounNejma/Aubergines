import React from 'react';
import SidebarLeft from '../components/SidebarLeft';
import MainBlock from '../components/MainBlock';
import SidebarRight from '../components/SidebarRight';

const Home = () => {
    return (
        <div>
            <SidebarLeft/>
            <MainBlock/>
            <SidebarRight/>
        </div>
    );
};

export default Home;