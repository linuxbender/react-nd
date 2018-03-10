import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
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
    render() {
        return (
            <div className="app">
                <Route exact path="/search" render={() => (
                    <SearchContent>
                        <SearchBar>
                            <SearchButtonClose/>
                            <SearchBooks/>
                        </SearchBar>
                        <SearchList>
                            <BookGrid books={[{id: 1, title:'The Adventures of Tom Sawyer', author:'Mark Twain'},{id:2, title:'Foo', author:'J.K.Rowling'}, {id:3, title:'Foo', author:'J.K.Rowling'}]} />
                        </SearchList>
                    </SearchContent>
                )}/>
                <Route exact path="/" render={() => (
                    <BookContent>
                        <BookTitle text='my Reads' />
                        <BookList>
                            <BookShelf title='Currently Reading' >
                                <BookGrid books={[{id: 1, title:'The Adventures of Tom Sawyer', author:'Mark Twain'},{id:2, title:'Foo', author:'J.K.Rowling'}, {id:3, title:'Foo', author:'J.K.Rowling'}]} />
                            </BookShelf>
                            <BookShelf title='Want to Read' >
                                <BookGrid books={[{id: 1, title:'The Hobbit', author:'J.R.R. Tolkien'},{id:2, title:'Foo Figther', author:'David McCullough'}]} />
                            </BookShelf>
                            <BookShelf title='Read' >
                                <BookGrid books={[{id: 1, title:'To Kill a Mockingbird', author:'Harper Lee'},{id:2, title:'Foo', author:'Orson Scott Card'}]} />
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
