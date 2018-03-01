import React from 'react'
import PropTypes from 'prop-types'
import './Title.css';

const Title = ({text}) => {
    return (
        <div className="list-title">
            <h1>text</h1>
        </div>
    )
};

Title.propTypes = {

    /** Display Text for the title */
    text: PropTypes.string.isRequired
};

export default Title;


