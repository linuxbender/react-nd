import React from 'react';
import './SearchBooks.css';
import PropTypes from "prop-types";

const SearchBooks = ({changeHandler}) => {
    const changeInputValue = (e) => {
        changeHandler(e.target.value);
    };
    return (
        <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={changeInputValue}/>
        </div>
    )
};

SearchBooks.propTypes = {
    /** changeHandler function */
    changeHandler: PropTypes.func.isRequired,
};

export default SearchBooks;