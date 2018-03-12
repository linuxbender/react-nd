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
import {EMPTY_STRING, SHELF_CURRENT_READ, SHELF_NONE, SHELF_READ, SHELF_WANT_TO_READ} from "./utils/AppUtil";

class BooksApp extends React.Component {

    state = {
        books: [],
        newBooks: []
    };

    componentDidMount() {
        this.fetchMyBooks();
    };

    isBookIdAndShelfNameNotEmpty = (bookId, shelfName) => shelfName.trim() !== EMPTY_STRING && bookId !== undefined;

    fetchMyBooks = () => BooksAPI.getAll().then((books) => this.setState({books}));

    searchNewBooks = (query) => {
        if (query.length !== 0) {
            BooksAPI.search(query, 10).then((books) => {
                if (books.length > 0) {
                    books = this.mapSearchResultToBooks(books);
                    this.setState({newBooks: books})
                } else {
                    this.setState({newBooks: []});
                }
            });
        } else {
            this.setState({newBooks: []});
        }
    };

    mapSearchResultToBooks = (resultBooks) => {
        return resultBooks.map((resultBook) => {
            const myBook = this.state.books.find(book => book.id === resultBook.id);
            return {
                id: resultBook.id,
                title: resultBook.title,
                authors: resultBook.authors,
                shelf: myBook ? myBook.shelf : SHELF_NONE,
                imageLinks: resultBook.imageLinks ? resultBook.imageLinks : undefined
            };
        });
    };

    updateMyBooks = (bookId, shelfName) => {
        if (this.isBookIdAndShelfNameNotEmpty(bookId, shelfName)) {
            BooksAPI.update(bookId, shelfName).then(() => this.fetchMyBooks());
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
                        <BookTitle text='MyReads'/>
                        <BookList>
                            <BookShelf title='Currently Reading'>
                                <BookGrid books={this.state.books.filter(book => book.shelf === SHELF_CURRENT_READ)}
                                          changeHandler={this.updateMyBooks}/>
                            </BookShelf>
                            <BookShelf title='Want to Read'>
                                <BookGrid books={this.state.books.filter(book => book.shelf === SHELF_WANT_TO_READ)}
                                          changeHandler={this.updateMyBooks}/>
                            </BookShelf>
                            <BookShelf title='Read'>
                                <BookGrid books={this.state.books.filter(book => book.shelf === SHELF_READ)}
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

export default BooksApp;