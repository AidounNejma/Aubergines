import React from 'react';
import '../assets/components/mainblock.scss';
import Stories from './jsx-components/Stories';
import { FaGripHorizontal } from 'react-icons/fa';

const MainBlock = ({openSideBar, element}) => {

    const toggleSidebar = () => {
        openSideBar(true);
    }

    return (

        <div className='mainBlock'>
            
            <div className='wrapper-main-block'>
                <div className='wrapper-stories-button'>
                    <Stories/>
                    <button onClick={toggleSidebar} className='button-toggle-sidebar'><FaGripHorizontal/></button>
                </div>
                

                <div className='line'></div>
                
                    {element}
                
            </div>
        </div>
    );
};

export default MainBlock;