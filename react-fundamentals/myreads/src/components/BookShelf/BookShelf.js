import React from 'react';
import PropTypes from 'prop-types';
import './BookShelf.css';

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                {props.children}
            </div>
        </div>
    )
};

BookShelf.propTypes = {
    /** Title is required */
    title: PropTypes.string.isRequired
};

export default BookShelf;