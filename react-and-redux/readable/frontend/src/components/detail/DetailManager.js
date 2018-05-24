import React from 'react';
import {connect} from 'react-redux';
import withRouter from 'react-router-dom/es/withRouter';
import {loadCategories} from '../../actions/categoryActions';
import {loadComments} from '../../actions/commentActions';
import {loadPosts} from '../../actions/postActions';
import Loader from '../common/Loader';
import ArticlePost from '../home/ArticlePost';
import ArticleComment from './ArticleComment';
import BreadCrumBar from './BreadCrumBar';
import NewComment from './NewComment';
import SortBar from './SortBar';

class DetailManager extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadPosts());
        this.props.dispatch(loadCategories());
        this.props.dispatch(loadComments(this.props.match.params.id));
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isLoading && nextProps.posts.length === 0) {
            nextProps.history.push('error/404');
        }
    };

    render() {
        return (
            <div>
                {this.props.isLoading && <Loader/>}
                {!this.props.isLoading && <BreadCrumBar/>}
                {!this.props.isLoading && this.props.posts.map(post => <ArticlePost key={post.id} post={post}/>)}
                {!this.props.isLoading && <SortBar/>}
                {!this.props.isLoading && this.props.comments.map(comment => <ArticleComment key={comment.id}
                                                                                             comment={comment}/>)}
                {!this.props.isLoading && <NewComment postId={this.props.postId}/>}
            </div>
        )
    }
}

const mapStateToProps = (state, ctx) => {
    let posts = [...state.post.filter(i => i.id === ctx.match.params.id && i.category === ctx.match.params.category)];
    let postId = '';
    if (posts.length !== 0) {
        postId = posts[0].id
    }
    return {
        isLoading: state.apiCallsInProgress > 0,
        comments: state.comment,
        posts: posts,
        postId: postId
    };
};

export default withRouter(connect(mapStateToProps)(DetailManager));