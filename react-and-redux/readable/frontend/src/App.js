import React from 'react';
import './styles/App.css';
import Header from './components/common/Header';
import PostManager from './components/home/PostManager';
import NewPost from './components/home/NewPost';

const App = () => {
    return (
        <div>
            <Header></Header>
            <section className="articles">
                <NewPost></NewPost>
                <PostManager />
            </section>
        </div>
    );
};

export default App;