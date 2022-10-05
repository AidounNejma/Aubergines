import React, { useState } from 'react';
import MainBlock from './MainBlock';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

const Layout = ({element}) => {
    
    const [show, setShow] = useState(false);

    return (
        <div style={{display: 'flex'}}>
            <SidebarLeft/>
                <MainBlock openSideBar={setShow} element={element} />
            <SidebarRight opened={show} setIsOpened={setShow}/>
        </div>
    );
};

export default Layout;