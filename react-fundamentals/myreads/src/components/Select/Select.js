import React from 'react'
import PropTypes from 'prop-types'

const Select = ({options, onChangeHandler, currentSelected}) => {
    const optionList = options.map(option => <option key={option.id} value={option.value} disabled={option.disabled}>{option.text}</option>);
    return (
        <select onChange={onChangeHandler} value={currentSelected}>
            {optionList}
        </select>
    )
};

Select.propTypes = {
    /** Options array */
    options: PropTypes.array.isRequired,

    /** onChangeHandler function */
    onChangeHandler: PropTypes.func.isRequired
};

export default Select;


