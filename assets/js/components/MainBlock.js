import React from 'react';
import { useLocation } from 'react-router';
import '../../styles/components/mainblock.scss';
import Stories from './jsx-components/Stories';


const MainBlock = ({openSideBar, element}) => {
    const location = useLocation();

    return (

        <div className='mainBlock'>
            
            <div className='wrapper-main-block'>
                {
                    location.pathname != '/messagerie' &&
                    <div className='top-bar-wrapper'>
                        <div className='wrapper-stories-button'>
                            <Stories openSideBar={openSideBar}/>
                        </div>
                        <div className='line'></div>
                    </div>
                }
                
                    {element}
                
            </div>
        </div>
    );
};

export default MainBlock;