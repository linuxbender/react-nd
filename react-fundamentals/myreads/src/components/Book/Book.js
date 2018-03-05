import React from 'react'
import PropTypes from 'prop-types'
import './Book.css';

const Book = ({width, height, imageUrl}) => {
    return (
        <div>
            Book
        </div>
    )
};

Book.propTypes = {
    /** Width from the image */
    width: PropTypes.number.isRequired,

    /**  Height from the image*/
    height: PropTypes.number.isRequired,

    /** Image Url */
    imageUrl: PropTypes.string.isRequired
};

export default Book;


