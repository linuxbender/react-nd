import React from 'react';
import {connect} from 'react-redux';
import withRouter from 'react-router-dom/es/withRouter';
import {loadComments} from '../../actions/detailActions';
import {loadPosts} from '../../actions/postActions';
import Loader from '../common/Loader';
import ArticlePost from '../common/ArticlePost';
import BreadCrumBar from './BreadCrumBar';

// import DetailPost from './DetailPost';

class DetailManager extends React.Component {

    constructor(props) {
        super(props);
        if (props.match.params.id && props.match.params.id === '') {
            props.history.goBack();
        }
        this.state = props.detail;
    }

    componentDidMount() {
        this.props.dispatch(loadPosts());
        this.props.dispatch(loadComments(this.props.match.params.id));
    }

    render() {
        return (
            <div>
                {this.props.isLoading && <Loader/>}
                {!this.props.isLoading && this.props.posts.length <= 0 && this.props.history.push('/')}
                {!this.props.isLoading && this.props.posts.length > 1 && this.props.history.push('/404')}
                {!this.props.isLoading && <BreadCrumBar/>}
                {!this.props.isLoading && this.props.posts.map(post => <ArticlePost key={post.id} post={post}/>)}
            </div>
        )
    }
}

// {!this.props.isLoading && <DetailPost detail={this.state.detail}/>}

const mapStateToProps = (state, ctx) => ({
    isLoading: state.apiCallsInProgress > 0,
    detail: state.detail,
    posts: [...state.post.filter(i => i.id === ctx.match.params.id)]
});

export default withRouter(connect(mapStateToProps)(DetailManager));