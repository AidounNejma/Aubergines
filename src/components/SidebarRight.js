import React from 'react';
import '../assets/components/sidebar-right.scss'
import bbweed from '../assets/img/bbweed.png';
import SearchBar from './Jsx-components/SearchBar';
import TitleSection from './Jsx-components/TitleSection';
import Follow from './Jsx-components/Follow';
import ThumbnailsSaved from './Jsx-components/ThumbnailsSaved';
import LastActivites from './Jsx-components/LastActivites';
import { FaBookmark, FaHeart, FaRegCommentDots } from 'react-icons/fa';

const SidebarRight = () => {

     /* Import de toutes les images */
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context(`../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));

    const objects = Object.values(images);

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

                <div className='thumbnail-saved'>
                    <ThumbnailsSaved image={objects[0]} />
                    <ThumbnailsSaved image={objects[1]} />
                    <ThumbnailsSaved image={objects[2]} />
                    <ThumbnailsSaved image={objects[3]} />
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