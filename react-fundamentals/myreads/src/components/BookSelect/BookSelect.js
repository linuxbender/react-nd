import React from 'react';
import PropTypes from 'prop-types';

const BookSelect = ({options, changeHandler, book}) => {
    const optionList = options.map(option => <option key={option.id} value={option.value}>{option.text}</option>);
    let selectShelf = (e) => {
        changeHandler(book.id, e.target.value)
    };
    return (
        <select onChange={selectShelf} value={book.shelf}>
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
    book: PropTypes.object.isRequired
};

export default BookSelect;