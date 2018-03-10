import React from 'react'
import PropTypes from 'prop-types'
import './Book.css';
import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";

const Book = ({book, changeHandler}) => {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    backgroundImage: 'url("http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api")'
                }}></div>
                <BookShelfChanger changeHandler={changeHandler}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
        </div>
    )
};

Book.propTypes = {
    /** Book object */
    book: PropTypes.object.isRequired,

    /** onChangeHandler function */
    changeHandler: PropTypes.func.isRequired
};

export default Book;


