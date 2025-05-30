import React from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../actions/commentActions';

class DeleteComment extends React.Component {

    handleDeleteComment = event => {
        this.props.dispatch(deleteComment(this.props.comment.id));
        this.props.handleNotification(event);
    };

    handleChancel = event => {
        this.props.handleNotification(event);
    };

    render() {
        return (
            <article className="article-delete">
                <header>Delete Comment !</header>
                <div className="article-content">
                    <div className="form-group">
                        <i className="icon-48-white-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                <path fillRule="evenodd"
                                      d="M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z"/>
                            </svg>
                            <label>Hi, do you really want to delete this comment?</label>
                        </i>
                    </div>
                </div>
                <footer>
                    <button onClick={this.handleDeleteComment} className="button-error">Delete</button>
                    <button onClick={this.handleChancel}>Cancel</button>
                </footer>
            </article>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps)(DeleteComment);