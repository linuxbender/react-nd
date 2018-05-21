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
                <header>404</header>
                <div className="article-content">
                    <div>Page not Found</div>
                    <div>Go to the App <Link to="/">Home</Link>for a fresh start.</div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps)(FourZeroFour);