import React from 'react'
import PropTypes from 'prop-types'
import './Book.css';

const Book = ({book}) => {
    return (
        <div>
            id: {book.id} title: {book.title}
        </div>
    )
};

Book.propTypes = {
    /** Book object */
    book: PropTypes.object.isRequired,
};

export default Book;


