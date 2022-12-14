import React from 'react'
import NewsFeed from './NewsFeed';
import '../../../styles/components/subcomponents/user-news-feed.scss';
import { Link } from 'react-router-dom';

const UserNewsFeed = ({ icon1, icon2, post, user }) => {

    return (

        <div className="user-news-feed-layout" >
                <NewsFeed image={post.picturesPost} profile={user.userPictures} id={user.id} post={post}/>
            <div className='container-text-post'>
                <Link to={"/post/" + post.id} className="link-to-post">
                    <h3>
                        {post.title}
                    </h3>
                    <article>
                        {post.content}
                    </article>
                </Link>
                <div className="icons">
                    <div className="icon-display">
                        {icon1}
                    </div>
                    <div className="icon-display">
                        {icon2}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserNewsFeed

