import React from 'react';
import {connect} from 'react-redux';
import {loadCategories} from '../../actions/categoryActions';
import {loadPosts} from '../../actions/postActions';
import Loader from '../common/Loader';
import ArticlePost from './ArticlePost';
import NewPost from './NewPost';

class HomeManager extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadPosts());
        this.props.dispatch(loadCategories());
    }

    render() {
        return (
            <div>
                {this.props.isLoading && <Loader/>}
                {!this.props.isLoading && this.props.posts.map(post =>
                    <ArticlePost key={post.id} post={post}/>)}
                {!this.props.isLoading && <NewPost/>}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0,
    posts: state.post
});

export default connect(mapStateToProps)(HomeManager);