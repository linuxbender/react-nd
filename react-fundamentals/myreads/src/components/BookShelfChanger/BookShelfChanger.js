import React from 'react';
import PropTypes from 'prop-types';
import BookSelect from "../BookSelect";
import './BookShelfChanger.css';
import {EMPTY_STRING, SHELF_CURRENT_READ, SHELF_NONE, SHELF_READ, SHELF_WANT_TO_READ} from "../../utils/AppUtil";

const BookShelfChanger = ({changeHandler, book}) => {
    let options = [
        {id: 0, value: EMPTY_STRING, text: 'Move to...', selected: false},
        {id: 1, value: SHELF_CURRENT_READ, text: 'Currently Reading', selected: false},
        {id: 2, value: SHELF_WANT_TO_READ, text: 'Want to Read', selected: false},
        {id: 3, value: SHELF_READ, text: 'Read', selected: false},
        {id: 4, value: SHELF_NONE, text: 'None', selected: false}
    ];
    options = options.map(option => {
        if(book.shelf) {
            if(option.value === book.shelf) {
                option.selected = true;
            }
        } else {
            if(option.value === SHELF_NONE) {
                option.selected = true;
            }
        }
        return option;
    });
    return (
        <div className="book-shelf-changer">
            <BookSelect options={options} changeHandler={changeHandler} bookId={book.id}/>
        </div>
    )
};

BookShelfChanger.propTypes = {
    /** current Book Id */
    book: PropTypes.object.isRequired,
    /** onChangeHandler function */
    changeHandler: PropTypes.func.isRequired
};

export default BookShelfChanger;