import React from 'react';
import '../assets/components/sidebar-right.scss'
import bbweed from '../assets/img/bbweed.png';
import SearchBar from './SearchBar';
import TitleSection from './Jsx-components/TitleSection';
import Follow from './Jsx-components/Follow';

const SidebarRight = () => {
    return (
        <div className='rightBlock'>
            <div className='sidebar-right'>
            
                <SearchBar/>

                <TitleSection title="Les personnes à suivre"/>
                
                <Follow image={bbweed} name="Julian Speed" />
                <Follow image={bbweed} name="Kristen Mackenzie"/>
                <Follow image={bbweed} name="Sveltlana Flasuova" />
                
                <div className='line'></div>

                <TitleSection title="Vous avez sauvegardé"/>

            </div>
        </div>
    );
};

export default SidebarRight;