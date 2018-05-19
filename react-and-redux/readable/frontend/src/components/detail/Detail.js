import React from 'react';
import Link from 'react-router-dom/es/Link';
import DetailPost from './DetailPost';

const Detail = () => (
    <div>
        <section className="articles">
            <header></header>
            <div>
                <Link to='/'>Back</Link>
            </div>
            <footer></footer>
        </section>
        <section className="articles">
            <DetailPost/>
        </section>
    </div>
);
export default Detail;