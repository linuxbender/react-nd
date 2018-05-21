import React from 'react';
import Link from 'react-router-dom/es/Link';

const HeaderDetail = () => {
    return (
        <header className="header">
            <header><Link to="/">Readable</Link></header>
            <nav>
                <div className='nav-item-activ'>
                    <Link to={'/'}>Go Back</Link>
                </div>
            </nav>
        </header>
    );
};

export default HeaderDetail;