import React from 'react';
import { FaRegBell, FaUpload } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className='searchBar-wrapper'>
            <div className='searchbar-container'>
                <form>
                    <input type="search" placeholder="Search..."/>
                    <button type="submit">Search</button>
                </form>
                <div className='icons-searchbar'>
                    <FaRegBell/>
                </div>
                <div className='icons-searchbar'>
                    <FaUpload/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;