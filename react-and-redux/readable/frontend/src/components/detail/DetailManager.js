import React from 'react';
import {connect} from 'react-redux';
import withRouter from 'react-router-dom/es/withRouter';
import {loadComments} from '../../actions/commentActions';
import {readPost} from '../../actions/postActions';

class DetailManager extends React.Component {

    constructor(props) {
        super(props);
        if (props.match.params.id && props.match.params.id === '') {
            props.history.goBack();
        }
    }

    componentDidMount() {
        console.log("2");
        console.log(this.props.match.params.id);
        console.log(this.props);
        this.props.dispatch(readPost(this.props.match.params.id))
        this.props.dispatch(loadComments(this.props.match.params.id))
        //this.props.history.push('/404');
        //console.log(this.props.match.params.id);

    }

    render() {
        return (
            <div>
                <div>{this.props.posts}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.apiCallsInProgress > 0,
});

export default withRouter(connect(mapStateToProps)(DetailManager));