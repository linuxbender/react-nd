import React from 'react';
import {connect} from 'react-redux';
import {editPost} from '../../actions/postActions';
import {T_FORM_POST} from '../../utils/typeHelper';
import FormPost from './FormPost';

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = T_FORM_POST;
        this.state.post = props.post;
    }

    handleSubmit = event => {
        let post = Object.assign({}, this.state.post,);
        this.setState(Object.assign({}, T_FORM_POST, {resetForm: true}),
            () => this.props.dispatch(editPost(post)) && this.props.handleNotification(event));
    };

    handleChancel = event => {
        this.props.handleNotification(event);
    };

    handleModel = model => {
        this.setState(Object.assign({}, {post: model.post, isValid: model.isValid, resetForm: false}));
    };

    render() {
        return (
            <article className="article-edit">
                <header>
                    <i className="icon-24-black-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                            <path fillRule="evenodd"
                                  d="M0 11.592v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3l-1.3 1.3-3-3 1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/>
                        </svg>
                    </i>
                    Edit post
                </header>
                <FormPost model={this.state.post} handleModel={this.handleModel}/>
                <footer>
                    {this.state.isValid ? <button onClick={this.handleSubmit} className="button-primary">Update</button>
                        : <button className="button-action">Save</button>}
                    <button onClick={this.handleChancel}>Cancel</button>
                </footer>
            </article>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps)(EditPost);