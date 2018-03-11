import React from 'react';
import PropTypes from 'prop-types';

const BookSelect = ({options, changeHandler, bookId}) => {
    const optionList = options.map(option => <option key={option.id}
                                                     value={option.value}
                                                     disabled={option.disabled}>{option.text}</option>);
    const selectShelf = (e) => {
        changeHandler(bookId, e.target.value)
    };
    return (
        <select onChange={selectShelf}>
            {optionList}
        </select>
    )
};

BookSelect.propTypes = {
    /** Options array */
    options: PropTypes.array.isRequired,

    /** onChangeHandler function */
    changeHandler: PropTypes.func.isRequired,

    /** current selected value */
    bookId: PropTypes.string.isRequired
};

export default BookSelect;