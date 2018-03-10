import React from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
    return (<div className="search-books-bar">{props.children}</div>)
};
export default SearchBar;


