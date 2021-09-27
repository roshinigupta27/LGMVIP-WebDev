import React from 'react';
import './search.css';

const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa3'>
                <input 
                className='pa2 ba'
                 type="search" id='search'
                 placeholder='Search' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
