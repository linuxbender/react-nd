import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class BreadCrumBar extends React.Component {

    render() {
        return (
            <article>
                <div><Link to={'/'}>Readable</Link> > Detail View</div>
            </article>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0,
});

export default connect(mapStateToProps)(BreadCrumBar);