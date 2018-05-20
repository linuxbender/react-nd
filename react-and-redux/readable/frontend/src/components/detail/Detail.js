import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/Header';
import DetailManager from './DetailManager';

class Detail extends React.Component {

    render() {
        return (<div>
            <Header/>
            <section className="articles">
                <header></header>
                <div>
                    <Link to='/'>Back</Link>
                </div>
                <footer></footer>
            </section>
            <section className="articles">
                <DetailManager/>
            </section>
        </div>)
    }
}

export default Detail;