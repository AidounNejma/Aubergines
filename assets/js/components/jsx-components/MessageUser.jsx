import React from 'react';
import '../../../styles/components/subcomponents/message-user.scss';

const MessageUser = ({message, date}) => {
    return (
        <div className='message-user'>
            <div className='text-container'>
                <p className='message'>{message}</p>
                <p className='date'>{date}</p>
            </div>
        </div>
    );
};

export default MessageUser;