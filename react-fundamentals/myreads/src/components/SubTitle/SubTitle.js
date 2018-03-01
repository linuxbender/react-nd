import React from 'react'
import PropTypes from 'prop-types'
import './SubTitle.css';

const SubTitle = ({text}) => {
    return (
        <div className="sub-title">
            <h1>text</h1>
        </div>
    )
};

SubTitle.propTypes = {

    /** Display Text for the title */
    text: PropTypes.string.isRequired
};

export default SubTitle;


