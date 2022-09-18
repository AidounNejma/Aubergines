import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import '../../assets/components/subcomponents/stories.scss';
import PicturesProfile from './PicturesProfile';
import {importAll} from '../functions/ImportImages';

const Stories = () => {

    /* Import de mes images */
    const image = importAll(require.context(`../../assets/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);

    return (
        <div className='stories-wrapper'>
            <div className='stories-container'>
                    <PicturesProfile image={images[0]} name="Kristen Mackenzie" />
                    <PicturesProfile image={images[1]} name="Mily Arthur" />
                    <PicturesProfile image={images[2]} name="Julian Speed" />
                    <PicturesProfile image={images[3]} name="Sveltlana Flasuova" />
                    <PicturesProfile image={images[4]} name="Kylie Mansour " />
                    <PicturesProfile image={images[5]} name="Pam Anderson" />
                <FaPlusCircle/>
            </div>
        </div>
    );
};

export default Stories;