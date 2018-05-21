import React from 'react';
import {connect} from 'react-redux';
import withRouter from 'react-router-dom/es/withRouter';
import {loadComments, readPost} from '../../actions/detailActions';
import Loader from '../common/Loader';
import DetailPost from './DetailPost';

class DetailManager extends React.Component {

    constructor(props) {
        super(props);
        if (props.match.params.id && props.match.params.id === '') {
            props.history.goBack();
        }
        this.state = props.detail;
    }

    componentDidMount() {
        this.props.dispatch(readPost(this.props.match.params.id));
        this.props.dispatch(loadComments(this.props.match.params.id));
    }

    render() {
        return (
            this.props.detail.post.error && this.props.history.push('/404') ||
            this.props.isLoading ? <Loader/> : <DetailPost detail={this.state.detail}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0,
    detail: state.detail,
});

export default withRouter(connect(mapStateToProps)(DetailManager));