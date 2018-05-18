import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/common/Header';
import DetailPost from './components/detail/DetailPost';
import NewPost from './components/home/NewPost';
import PostManager from './components/home/PostManager';
import './styles/App.css';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Route exact path="/" render={() => (
                <section className="articles">
                    <NewPost></NewPost>
                    <PostManager/>
                </section>
            )}/>
            <Route exact path="/detail" render={() => (
                <section className="articles">
                    <NewPost></NewPost>
                    <DetailPost/>
                </section>
            )}/>
        </div>
    );
};

export default App;