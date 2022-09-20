import React, { useState } from 'react';
import SidebarLeft from '../components/SidebarLeft';
import MainBlock from '../components/MainBlock';
import SidebarRight from '../components/SidebarRight';

const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='home' style={{display: 'flex'}}>
            <SidebarLeft/>
            <MainBlock openSideBar={setShow}/>
            <SidebarRight opened={show} setIsOpened={setShow}/>
        </div>
    );
};

export default Home;