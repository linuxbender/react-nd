import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router-dom/es/Link';
import {resetDetail} from '../../actions/commentActions';

class FourZeroFour extends React.Component {

    componentDidMount() {
        this.props.dispatch(resetDetail());
    }

    render() {
        return (
            <section className="articles">
                <article>
                    <header>404 - page not found</header>
                    <div className="article-content">
                        Go to the App <Link to="/">Home</Link> for a fresh start.
                    </div>
                </article>
            </section>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps)(FourZeroFour);