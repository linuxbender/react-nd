import React from 'react';
import PropTypes from 'prop-types';
import './BookTitle.css';

const BookTitle = ({text}) => <div className="list-books-title"><h1>{text}</h1></div>;

BookTitle.propTypes = {
    /** Display Text for the title */
    text: PropTypes.string.isRequired
};

export default BookTitle;