import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";
import {EMPTY_STRING} from "../../utils/AppUtil";

const Book = ({book, changeHandler}) => {
    let imgUrl = EMPTY_STRING;
    if (book && book.imageLinks) {
        imgUrl = book.imageLinks.smallThumbnail || book.imageLinks.thumbnail;
    }
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    backgroundImage: `url("${imgUrl}")`
                }}></div>
                <BookShelfChanger changeHandler={changeHandler} book={book}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
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