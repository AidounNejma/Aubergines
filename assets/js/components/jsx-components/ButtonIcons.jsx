import React from 'react';
import '../../../styles/components/subcomponents/button-icons.scss';

const ButtonIcons = ({icon, text}) => {
    return (
        <button className='wrapper-icon'>
            {icon}
            <p>{text}</p>
        </button>
    );
};

export default ButtonIcons;