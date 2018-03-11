import React from 'react'
import './BookList.css';

const BookList = (props) => {
    return (
        <div className="list-books-content">
            <div>{props.children}</div>
        </div>
    )
};
export default BookList;