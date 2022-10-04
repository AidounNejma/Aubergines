import React from 'react';
import '../../styles/components/mainblock.scss';
import Stories from './jsx-components/Stories';


const MainBlock = ({openSideBar, element}) => {

    return (

        <div className='mainBlock'>
            
            <div className='wrapper-main-block'>
                <div className='top-bar-wrapper'>
                    <div className='wrapper-stories-button'>
                        <Stories openSideBar={openSideBar}/>
                            

                    </div>
                    <div className='line'></div>
                </div>
                
                    {element}
                
            </div>
        </div>
    );
};

export default MainBlock;