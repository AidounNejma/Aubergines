import React from 'react';
import '../../../styles/components/subcomponents/message-friend.scss';

const MessageFriend = ({picture, date, message}) => {
    return (
        <div className='message-friend'>
            <div className='image-container'>
                <img src={picture} alt="" />
            </div>
            <div className='text-container'>
                <p className='message'>{message}</p>
                <p className='date'>{date}</p>
            </div>
        </div>
    );
};

export default MessageFriend;