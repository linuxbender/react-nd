import React from 'react';
import Header from '../common/Header';
import HomeManager from './HomeManager';

const Home = () => (
    <div>
        <Header/>
        <section className="articles">
            <HomeManager/>
        </section>
    </div>
);
export default Home;