import React from 'react';
import PropTypes from 'prop-types';
import BookSelect from "../BookSelect";
import './BookShelfChanger.css';
import {SHELF, SHELF_CURRENT_READ, SHELF_NONE, SHELF_READ, SHELF_WANT_TO_READ} from "../../utils/AppUtil";

const BookShelfChanger = ({changeHandler, bookId}) => {
    const options = [
        {id: 0, value: SHELF, text: 'Move to...'},
        {id: 1, value: SHELF_CURRENT_READ, text: 'Currently Reading'},
        {id: 2, value: SHELF_WANT_TO_READ, text: 'Want to Read'},
        {id: 3, value: SHELF_READ, text: 'Read'},
        {id: 4, value: SHELF_NONE, text: 'None'}
    ];
    return (
        <div className="book-shelf-changer">
            <BookSelect options={options} changeHandler={changeHandler} bookId={bookId}/>
        </div>
    )
};

BookShelfChanger.propTypes = {
    /** current Book Id */
    bookId: PropTypes.string.isRequired,
    /** onChangeHandler function */
    changeHandler: PropTypes.func.isRequired
};

export default BookShelfChanger;