import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksApi'
import './App.css'
import BookShelf from "./components/BookShelf";
import BookGrid from "./components/BookGrid";
import BookList from "./components/BookList";
import BookTitle from "./components/BookTitle";
import BookContent from "./components/BookContent";
import SearchButtonOpen from "./components/SearchButtonOpen";
import SearchContent from "./components/SearchContent";
import SearchButtonClose from "./components/SearchButtonClose";
import SearchBooks from "./components/SearchBooks";
import SearchBar from "./components/SearchBar";
import SearchList from "./components/SearchList";

class BooksApp extends React.Component {

    state = {
        books: [],
        newBooks: []
    };

    componentDidMount() {
        this.fetchMyBooks();
    };

    fetchMyBooks = () => {
        BooksAPI.getAll().then((books) => this.setState({books}));
    };

    searchNewBooks = (query) => {
        this.setState({newBooks: []});
        if (query.length !== 0) {
            BooksAPI.search(query, 10).then((books) => {
                if (books.length > 0) {
                    this.setState({newBooks: books, query: ''})
                }
            });
        }
    };

    updateMyBooks = (bookId, shelf) => {
        if (shelf.trim() !== '' && bookId !== undefined) {
            BooksAPI.update(bookId, shelf).then(() => this.fetchMyBooks());
        }
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/search" render={() => (
                    <SearchContent>
                        <SearchBar>
                            <SearchButtonClose/>
                            <SearchBooks changeHandler={this.searchNewBooks}/>
                        </SearchBar>
                        <SearchList>
                            <BookGrid books={this.state.newBooks}
                                      changeHandler={this.updateMyBooks}/>
                        </SearchList>
                    </SearchContent>
                )}/>
                <Route exact path="/" render={() => (
                    <BookContent>
                        <BookTitle text='my Reads'/>
                        <BookList>
                            <BookShelf title='Currently Reading'>
                                <BookGrid books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                                          changeHandler={this.updateMyBooks}/>
                            </BookShelf>
                            <BookShelf title='Want to Read'>
                                <BookGrid books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                                          changeHandler={this.updateMyBooks}/>
                            </BookShelf>
                            <BookShelf title='Read'>
                                <BookGrid books={this.state.books.filter(book => book.shelf === 'read')}
                                          changeHandler={this.updateMyBooks}/>
                            </BookShelf>
                        </BookList>
                        <SearchButtonOpen/>
                    </BookContent>
                )}/>
            </div>
        )
    }
}

export default BooksApp