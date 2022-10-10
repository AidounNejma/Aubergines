import React from 'react';
import { FaPlus } from 'react-icons/fa';
import '../../../styles/components/subcomponents/button-create.scss';

const ButtonCreate = () => {
    return (
        <button className='button-create'>
            <FaPlus/>
        </button>
    );
};

export default ButtonCreate;