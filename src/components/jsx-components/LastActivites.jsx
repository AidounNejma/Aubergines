import React from 'react';

const LastActivites = ({icon, text}) => {
    return (
        <div className='last-activities'>
            {icon}
            <p className='text-last-activity'>{text}</p>
        </div>
    );
};

export default LastActivites;