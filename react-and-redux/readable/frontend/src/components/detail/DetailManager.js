import React from 'react';
import {connect} from 'react-redux';
import withRouter from 'react-router-dom/es/withRouter';
import {loadCategories} from '../../actions/categoryActions';
import {loadComments} from '../../actions/commentActions';
import {loadPosts} from '../../actions/postActions';
import ArticlePost from '../common/ArticlePost';
import Loader from '../common/Loader';
import ArticleComment from './ArticleComment';
import BreadCrumBar from './BreadCrumBar';
import NewComment from './NewComment';
import SortBar from './SortBar';

// import DetailPost from './DetailPost';

class DetailManager extends React.Component {

    constructor(props) {
        super(props);
        if (props.match.params.id && props.match.params.id === '') {
            props.history.goBack();
        }
    }

    componentDidMount() {
        this.props.dispatch(loadPosts());
        this.props.dispatch(loadCategories());
        this.props.dispatch(loadComments(this.props.match.params.id));
    }

    render() {
        return (
            <div>
                {this.props.isLoading && <Loader/>}
                {!this.props.isLoading && this.props.post !== undefined && this.props.history.push('/')}
                {!this.props.isLoading && this.props.post !== undefined && this.props.history.push('/404')}
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

// {!this.props.isLoading && <DetailPost detail={this.state.detail}/>}

const mapStateToProps = (state, ctx) => ({
    isLoading: state.apiCallsInProgress > 0,
    comments: state.comment,
    posts: [...state.post.filter(i => i.id === ctx.match.params.id)],
    postId: [...state.post.filter(i => i.id === ctx.match.params.id)][0].id
});

export default withRouter(connect(mapStateToProps)(DetailManager));