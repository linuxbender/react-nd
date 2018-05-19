import React from 'react';
import NewPost from './NewPost';
import PostManager from './PostManager';

const Home = () => (
    <section className="articles">
        <NewPost></NewPost>
        <PostManager/>
    </section>
);
export default Home;