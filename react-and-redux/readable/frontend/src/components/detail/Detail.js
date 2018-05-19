import React from 'react';
import NewPost from '../home/NewPost';
import DetailPost from './DetailPost';

const Detail = () => (
    <section className="articles">
        <NewPost></NewPost>
        <DetailPost/>
    </section>
);
export default Detail;