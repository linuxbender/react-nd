import React from 'react'
import PropTypes from 'prop-types'
import './Label.css';

const Label = ({htmlFor, text, required}) => {
    return (
        <label className='label' htmlFor={htmlFor}>
            {text} {required && <span className='label-asterisk-color'> *</span>}
        </label>
    )
};

Label.propTypes = {
    /** HTML Id fro associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Display Text for the Label */
    text: PropTypes.string.isRequired,

    /** Display asterisk after Label if true */
    required: PropTypes.bool
};

export default Label;


