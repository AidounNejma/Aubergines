import React from 'react';
import NewsFeed from './jsx-components/NewsFeed';

const BlockTimeline = ({props}) => {
    return (
        <div>
            <h1 className='title-timeline'>Fil d'actualités</h1>

            <div className='newsfeed-container'>
                {props.map(prop => (
                <NewsFeed name={prop.user.username} message={prop.title} image={prop.picturesPost} profile={prop.user.userPictures} key={prop.id} id={prop.user.id} post={prop}/>
                ))}
            </div>
        </div>
    );
};

export default BlockTimeline;