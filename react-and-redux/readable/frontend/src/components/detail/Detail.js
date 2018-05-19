import React from 'react';
import {loadPosts} from '../../actions/postActions';
import DetailManager from './DetailManager';

class Detail extends React.Component {
    handleBack = event => this.props.dispatch(loadPosts()) && this.props.history.push("/");

    render() {
        return (<div>
            <section className="articles">
                <header></header>
                <div>
                    <a href='/' onClick={this.handleBack}>Back</a>
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