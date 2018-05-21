import React from 'react';
import HeaderDetail from '../common/HeaderDetail';
import DetailManager from './DetailManager';

class Detail extends React.Component {

    render() {
        return (
            <div>
                <HeaderDetail/>
                <section className="articles">
                    <DetailManager/>
                </section>
            </div>
        )
    }
}

export default Detail;