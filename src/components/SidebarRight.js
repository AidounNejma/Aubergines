import React from 'react';
import '../assets/components/sidebar-right.scss'
import SearchBar from './jsx-components/SearchBar';
import TitleSection from './jsx-components/TitleSection';
import Follow from './jsx-components/Follow';
import ThumbnailsSaved from './jsx-components/ThumbnailsSaved';
import LastActivites from './jsx-components/LastActivites';
import { FaBookmark, FaHeart, FaRegCommentDots } from 'react-icons/fa';
import {importAll} from './functions/ImportImages';

const SidebarRight = () => {

    /* Import de mes images */
    const image = importAll(require.context(`../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);

    /* Import profile pictures */
    const profile = importAll(require.context(`../assets/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
    const profiles = Object.values(profile);

    return (
        <div className='rightBlock'>
            <div className='sidebar-right'>
            
                <SearchBar/>

                <TitleSection title="Les personnes à suivre"/>
                
                <Follow image={profiles[0]} name="Julian Speed" />
                <Follow image={profiles[1]} name="Kristen Mackenzie"/>
                <Follow image={profiles[2]} name="Sveltlana Flasuova" />
                
                <div className='line'></div>

                <TitleSection title="Vous avez sauvegardé"/>

                <div className='thumbnail-saved'>
                    <ThumbnailsSaved image={images[0]} />
                    <ThumbnailsSaved image={images[1]} />
                    <ThumbnailsSaved image={images[2]} />
                    <ThumbnailsSaved image={images[3]} />
                </div>

                <div className='line'></div>

                <TitleSection title="Dernières activités"/>

                <div className='wrapper-activities'>
                    <LastActivites text="Vous avez aimé le post de Virginie" icon={<FaHeart className='heart'/>}/>
                    <LastActivites text="Vous avez commenté le post de Ahmed" icon={<FaRegCommentDots className='comments'/>}/>
                    <LastActivites text="Vous avez sauvegardé le post de Kylie" icon={<FaBookmark className='saved'/>}/>
                </div>

            </div>
        </div>
    );
};

export default SidebarRight;