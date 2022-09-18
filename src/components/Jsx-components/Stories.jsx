import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import '../../assets/components/subcomponents/stories.scss';
import PicturesProfile from './PicturesProfile';

const Stories = () => {
    
    /* Import de toutes les images */
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context(`../../assets/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));

    const objects = Object.values(images);

    return (
        <div className='stories-wrapper'>
            <div className='stories-container'>
                    <PicturesProfile image={objects[0]} name="Kristen Mackenzie" />
                    <PicturesProfile image={objects[1]} name="Mily Arthur" />
                    <PicturesProfile image={objects[2]} name="Julian Speed" />
                    <PicturesProfile image={objects[3]} name="Sveltlana Flasuova" />
                    <PicturesProfile image={objects[4]} name="Kylie Mansour " />
                    <PicturesProfile image={objects[5]} name="Pam Anderson" />
                <FaPlusCircle/>
            </div>
        </div>
    );
};

export default Stories;