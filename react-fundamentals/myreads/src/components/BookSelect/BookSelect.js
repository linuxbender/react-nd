import React from 'react'
import PropTypes from 'prop-types'

const BookSelect = ({options, changeHandler, currentSelected}) => {
    const optionList = options.map(option => <option key={option.id} value={option.value} disabled={option.disabled}>{option.text}</option>);
    return (
        <select onChange={changeHandler} value={currentSelected}>
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
    currentSelected: PropTypes.string
};

export default BookSelect;


