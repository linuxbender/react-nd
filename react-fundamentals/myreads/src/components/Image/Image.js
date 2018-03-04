import React from 'react'
import PropTypes from 'prop-types'
import './Image.css';

const Image = ({width, height, imageUrl}) => {
    return (
        <div class="book-cover"
             style="width: {width}px; height: {height}px; background-image: url('{imageUrl}');">
        </div>
    )
};

Image.propTypes = {
    /** Width from the image */
    width: PropTypes.number.isRequired,

    /**  Height from the image*/
    height: PropTypes.number.isRequired,

    /** Image Url */
    imageName: PropTypes.string.isRequired
};

export default Image;


