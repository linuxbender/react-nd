import React from 'react';
import './BookList.css';

const BookList = (props) => <div className="list-books-content"><div>{props.children}</div></div>;

export default BookList;