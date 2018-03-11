import React from 'react'
import PropTypes from 'prop-types'
import './BookGrid.css';
import Book from "../Book";

const BookGrid = ({books, changeHandler}) => {
    const itemList = books.map(book => <li key={book.id}><Book book={book} changeHandler={changeHandler}/></li>);
    return (
        <ol className="books-grid">
            {itemList}
        </ol>
    )
};

BookGrid.propTypes = {
    /** Width from the image */
    books: PropTypes.array.isRequired,
    /** onChangeHandler function */
    changeHandler: PropTypes.func.isRequired
};

export default BookGrid;