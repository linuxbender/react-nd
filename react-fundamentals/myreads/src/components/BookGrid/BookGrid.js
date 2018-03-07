import React from 'react'
import PropTypes from 'prop-types'
import './BookGrid.css';

const BookGrid = ({books}) => {
    const itemList = books.map( (book, index) => <li key={book.id}>{book.id}: {book.title}</li>);
    return (
        <ol className="books-grid">
            {itemList}
        </ol>
    )
};

BookGrid.propTypes = {
    /** Width from the image */
    books: PropTypes.array.isRequired,
};

export default BookGrid;


