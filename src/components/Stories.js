import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import '../assets/components/stories.scss';
const Stories = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context(`../assets/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
    const objects = Object.values(images);
    
    return (
        <div className='stories-wrapper'>
            <div className='stories-container'>
                {objects.map(image=> (
                        <div className='container-profile' key={image}>
                            <div style={{background: `url(${image})`}} key={image} className='profile-img'>
                            </div>
                            <p>Martin Dupont</p>
                        </div>
                ))}
                <FaPlusCircle/>
            </div>
            <div className='line'></div>
        </div>
    );
};

export default Stories;