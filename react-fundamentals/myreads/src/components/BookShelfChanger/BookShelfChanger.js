import React from 'react'
import PropTypes from 'prop-types'
import BookSelect from "../BookSelect";
import './BookShelfChanger.css';

const BookShelfChanger = ({changeHandler, currentSelected}) => {
    const options = [
        {id: 0, value: 'none', text: 'Move to...', disabled:true},
        {id: 1, value: 'currentlyReading', text: 'Currently Reading'},
        {id: 2, value: 'wantToRead', text: 'Want to Read'},
        {id: 3, value: 'read', text: 'Read'},
        {id: 4, value: 'none', text: 'None'}
    ];
    return (
        <div className="book-shelf-changer">
            <BookSelect options={options} changeHandler={changeHandler} currentSelected={currentSelected} />
        </div>
    )
};

BookShelfChanger.propTypes = {
    /** Current Selected value */
    currentSelected: PropTypes.string,

    /** onChangeHandler function */
    changeHandler: PropTypes.func.isRequired
};

export default BookShelfChanger;
