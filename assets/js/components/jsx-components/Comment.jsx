import React from 'react';
import { importAll } from '../functions/ImportImages';
import '../../../styles/components/subcomponents/comment.scss';

const Comment = ({post}) => {
    /* Import de mes images */
    const image = importAll(require.context(`../../../styles/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);


    return (
        <div className='comment'>
            <div className='container-image'>
                <img src={images[0]} alt="" />
            </div>
            <div className='content-comment'>
                <div className='content-header'>
                    <p className='name'>Alice</p>
                    <p className='username'>@elchia</p>
                    <p className='date'> - 15h</p>
                </div>
                <div className='content-bottom'>
                    <p className='content'>Mais c'est trop génial !</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;