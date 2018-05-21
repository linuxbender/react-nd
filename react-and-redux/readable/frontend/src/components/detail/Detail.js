import React from 'react';
import HeaderDetail from '../common/HeaderDetail';
import DetailManager from './DetailManager';

const Detail = () => (
    <div>
        <HeaderDetail/>
        <section className="articles">
            <DetailManager/>
        </section>
    </div>
);

export default Detail;