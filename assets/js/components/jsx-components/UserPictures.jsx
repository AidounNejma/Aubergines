import React from 'react'
import { importAll } from '../functions/ImportImages';

const UserPictures = () => {

    /* Import de mes images */
    const image = importAll(require.context(`../../assets/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);
    return (
        <div>
            <img src={images[0]} alt="user_images_profile"/>
        </div>
    )
}

export default UserPictures
