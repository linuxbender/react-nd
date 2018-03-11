import React from 'react'
import './SearchList.css';

const SearchList = (props) => <div className="search-books-results">{props.children}</div>;

export default SearchList;