import React, { Component } from 'react'

const Search = ({onSearch}) => {
    
        return (
            <div>
                <input type="search" id="searchInput" onChange={onSearch}/>
            </div>
        )

}

export default Search