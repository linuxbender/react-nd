import React from 'react';
import {connect} from 'react-redux';
import {sortCommentsByBestScore, sortCommentsByLowestScore} from '../../actions/commentActions';

class SortBar extends React.Component {

    sortByBestScore = () => {
        this.props.dispatch(sortCommentsByBestScore());
    };

    sortByLowestScore = () => {
        this.props.dispatch(sortCommentsByLowestScore());
    };

    render() {
        return (
            <article>
                <div>
                    Sort Comment by: &nbsp;
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