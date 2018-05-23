import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router-dom/es/Link';
import {updatePostDownVote, updatePostUpVote} from '../../actions/postActions';
import BrandLogo from '../common/BrandLogo';
import DeletePost from './DeletePost';
import EditPost from './EditPost';

class ArticlePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showEdit: false, showDelete: false}
    }

    handlePostUpVote = event => {
        this.props.dispatch(updatePostUpVote(this.props.post.id));
    };

    handlePostDownVote = event => {
        this.props.dispatch(updatePostDownVote(this.props.post.id));
    };


    handlePostEdit = event => {
        this.setState({showEdit: true, showDelete: false});
    };

    handlePostDelete = event => {
        this.setState({showEdit: false, showDelete: true});
    };

    handleViewNotification = event => {
        this.setState({showEdit: false, showDelete: false});
    };

    render() {
        return (
            <div>
                <article>
                    <BrandLogo name={this.props.post.category}/>
                    <header><Link
                        to={`/${this.props.post.category}/${this.props.post.id}`}>{this.props.post.title}</Link>
                    </header>
                    <div className="article-content">{this.props.post.body}</div>
                    <footer>
                        <i className="icon-24-blue-90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                                <path fillRule="evenodd"
                                      d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/>
                            </svg>
                            {new Date(this.props.post.timestamp).toLocaleDateString()}, {this.props.post.author}
                        </i>
                        <button onClick={this.handlePostUpVote} className="button-action">
                            <i className="icon-24-red-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                    <path fillRule="evenodd"
                                          d="M11.2 3c-.52-.63-1.25-.95-2.2-1-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-.95.05-1.69.38-2.2 1-.52.61-.78 1.28-.8 2 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.02-.72-.28-1.39-.8-2.02V3z"/>
                                </svg>
                            </i>{this.props.post.voteScore || 0}
                        </button>
                        <button onClick={this.handlePostDownVote} className="button-action">
                            <i className="icon-24-blue-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M15.98 7.83l-.97-5.95C14.84.5 13.13 0 12 0H5.69c-.2 0-.38.05-.53.14L3.72 1H2C.94 1 0 1.94 0 3v4c0 1.06.94 2.02 2 2h2c.91 0 1.39.45 2.39 1.55.91 1 .88 1.8.63 3.27-.08.5.06 1 .42 1.42.39.47.98.77 1.56.77 1.83 0 3-3.72 3-5.02l-.02-.98h2.04c1.16 0 1.95-.8 1.98-1.97 0-.06.02-.13-.02-.2v-.01zm-1.97 1.19h-1.99c-.7 0-1.03.28-1.03.97l.03 1.03c0 1.27-1.17 4-2 4-.5 0-1.08-.5-1-1 .25-1.58.34-2.78-.89-4.14C6.11 8.75 5.36 8 4 8V2l1.67-1H12c.73 0 1.95.31 2 1l.02.02 1 6c-.03.64-.38 1-1 1h-.01z"/>
                                </svg>
                            </i> down
                        </button>
                        <Link to={`/${this.props.post.category}/${this.props.post.id}`}>
                            <button className="button-action">
                                <i className="icon-24-black-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"/>
                                    </svg>
                                </i>{this.props.post.commentCount || 0}
                            </button>
                        </Link>
                        <button onClick={this.handlePostEdit} className="button-action">
                            <i className="icon-24-black-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                    <path fillRule="evenodd"
                                          d="M0 11.592v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3l-1.3 1.3-3-3 1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/>
                                </svg>
                            </i>edit
                        </button>
                        <button onClick={this.handlePostDelete} className="button-action">
                            <i className="icon-24-red-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                    <path fillRule="evenodd"
                                          d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"/>
                                </svg>
                            </i>delete
                        </button>
                    </footer>
                </article>
                {this.state.showDelete &&
                <DeletePost post={this.props.post} handleNotification={this.handleViewNotification}/>}
                {this.state.showEdit &&
                <EditPost post={this.props.post} handleNotification={this.handleViewNotification}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps)(ArticlePost);