import React from 'react';
import {connect} from 'react-redux';
import {sortPostsByBestScore, sortPostsByLowestScore} from '../../actions/postActions';

class SortBar extends React.Component {

    sortByBestScore = () => {
        this.props.dispatch(sortPostsByBestScore());
    };

    sortByLowestScore = () => {
        this.props.dispatch(sortPostsByLowestScore());
    };

    render() {
        return (
            <article>
                <div>
                    Sort by: &nbsp;
                    <button onClick={this.sortByBestScore} className="button-primary">Best Score</button>
                    &nbsp;&nbsp;
                    <button onClick={this.sortByLowestScore} className="button-primary">Lowest Score</button>
                </div>
            </article>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0,
});

export default connect(mapStateToProps)(SortBar);