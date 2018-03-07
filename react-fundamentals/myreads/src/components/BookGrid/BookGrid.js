import React from 'react'
import PropTypes from 'prop-types'
import './BookGrid.css';
import Book from "../Book";

const BookGrid = ({books}) => {
    const itemList = books.map(book => <li key={book.id}><Book book={book}/></li>);
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


