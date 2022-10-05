import React from 'react';
import { FaRegBell, FaTimes, FaUpload } from 'react-icons/fa';
import InputSearch from './InputSearch';

const SearchBar = ({setIsOpened}) => {

    return (
        <div className='searchBar-wrapper'>
            <div className='searchbar-container'>
                
                <InputSearch text="Rechercher..."/>

                <button className='icons-searchbar'>
                    <FaRegBell/>
                </button>
                <button className='icons-searchbar'>
                    <FaUpload/>
                </button>
                <button className='icons-searchbar' onClick={() => setIsOpened(false)}>
                    <FaTimes/>
                </button>

            </div>
        </div>
    );
};

export default SearchBar;