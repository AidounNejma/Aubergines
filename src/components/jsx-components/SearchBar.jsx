import React from 'react';
import { FaRegBell, FaTimes, FaUpload } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className='searchBar-wrapper'>
            <div className='searchbar-container'>
                <form>
                    <input type="search" placeholder="Search..."/>
                    <button type="submit">Search</button>
                </form>
                <button className='icons-searchbar'>
                    <FaRegBell/>
                </button>
                <button className='icons-searchbar'>
                    <FaUpload/>
                </button>
                <button className='icons-searchbar'>
                    <FaTimes/>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;