import React from 'react';
import Header from '../common/Header';
import NewPost from './NewPost';
import HomeManager from './HomeManager';

const Home = () => (
    <div>
        <Header/>
        <section className="articles">
            <NewPost/>
            <HomeManager/>
        </section>
    </div>
);
export default Home;