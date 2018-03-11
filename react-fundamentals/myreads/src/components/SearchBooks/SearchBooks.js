import React from 'react'
import './SearchBooks.css';
import PropTypes from "prop-types";

const SearchBooks = ({changeHandler}) => {
    let query = '';
    const enterKeyPress = (e) => {
        if (e.key === 'Enter') {
            changeHandler(query);
            query = '';
        }
    };
    const changeInputValue = (e) => {
        query = e.target.value;
    };
    return (
        <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onKeyPress={enterKeyPress}
                   onChange={changeInputValue}/>
        </div>
    )
};

SearchBooks.propTypes = {
    /** changeHandler function */
    changeHandler: PropTypes.func.isRequired,
};

export default SearchBooks;