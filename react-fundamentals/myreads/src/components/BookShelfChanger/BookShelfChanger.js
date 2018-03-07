import React from 'react'
import PropTypes from 'prop-types'
import Select from "../Select";

const BookShelfChanger = ({onChangeHandler, currentSelected}) => {
    const options = [
        {id: 1, value: 'none', text: 'Move to...', disabled:true},
        {id: 1, value: 'currentlyReading', text: 'Currently Reading'},
        {id: 1, value: 'wantToRead', text: 'Want to Read'},
        {id: 1, value: 'read', text: 'Read'},
        {id: 1, value: 'none', text: 'None'}
    ];
    return (
        <div className="book-shelf-changer">
            <Select options={options} onChangeHandler={onChangeHandler} currentSelected={currentSelected} />
        </div>
    )
};

BookShelfChanger.propTypes = {
    /** Current Selected value */
    currentSelected: PropTypes.string,

    /** onChangeHandler function */
    onChangeHandler: PropTypes.func.isRequired
};

export default BookShelfChanger;
