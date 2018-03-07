import React from 'react'
import PropTypes from 'prop-types'
import './Cover.css';

const Cover = ({width, height, imageUrl}) => {
    return (
        <div className="book-cover"
             style={{
                 width: width,
                 height: height,
                 backgroundImage: `url("${imageUrl}")`}} >
        </div>
    )
};

Cover.propTypes = {
    /** Width from the image */
    width: PropTypes.number.isRequired,

    /**  Height from the image*/
    height: PropTypes.number.isRequired,

    /** Image Url */
    imageUrl: PropTypes.string.isRequired
};

export default Cover;
