import React from 'react';
import {connect} from 'react-redux';
import ArticlePost from '../common/ArticlePost';

class HomeManager extends React.Component {

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

export default connect(mapStateToProps)(HomeManager);