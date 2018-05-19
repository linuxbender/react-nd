import React from 'react';
import Header from '../common/Header';
import NewPost from './NewPost';
import PostManager from './PostManager';

const Home = () => (
    <div>
        <Header/>
        <section className="articles">
            <NewPost/>
            <PostManager/>
        </section>
    </div>
);
export default Home;