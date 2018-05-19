import React from 'react';
import {connect} from 'react-redux';
import {loadPosts} from '../../actions/postActions';
import ArticlePost from '../common/ArticlePost';

class PostManager extends React.Component {

    render() {
        return (
            this.props.posts.map(post => <ArticlePost key={post.id} post={post}/>)
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.apiCallsInProgress > 0,
    posts: state.post
});

export default connect(mapStateToProps)(PostManager);