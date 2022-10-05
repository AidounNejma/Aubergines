import React from 'react';
import '../../../styles/components/subcomponents/input-search.scss';

const InputSearch = ({text}) => {
    return (
        <form className='input-search'>
            <input type="search" placeholder={text}/>
            <button type="submit">Search</button>
        </form>
    );
};

export default InputSearch;