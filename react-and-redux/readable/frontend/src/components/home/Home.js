import React from 'react';
import Header from '../common/Header';
import HomeManager from './HomeManager';
import SortBar from './SortBar';

const Home = () => (
    <div>
        <Header/>
        <section className="articles">
            <SortBar/>
            <HomeManager/>
        </section>
    </div>
);
export default Home;