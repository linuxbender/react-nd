import React from 'react';
import Link from 'react-router-dom/es/Link';

const FourZeroFour = () => (
    <section className="articles">
        <header>404</header>
        <div className="article-content">
            <div>Page not Found</div>
            <div>Go to the App <Link to="/">Home</Link>for a fresh start.</div>
        </div>
    </section>
);

export default FourZeroFour;