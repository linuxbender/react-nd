import React from 'react';
import {connect} from 'react-redux';
import {createNewPost} from '../../actions/postActions';
import {uuidv4} from '../../utils/numberHelper';
import {T_FORM_POST} from '../../utils/typeHelper';
import FormPost from './FormPost';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = T_FORM_POST;
    }

    handleSubmit = event => {
        let post = Object.assign({}, this.state.post, {id: uuidv4(), timestamp: Date.now()});
        this.setState(T_FORM_POST, () => this.props.dispatch(createNewPost(post)));
    };

    handleModel = model => {
        this.setState(Object.assign({}, {post: model.post, isValid: model.isValid, resetForm: false}));
    };

    handleReset = () => {
        this.setState(Object.assign({}, this.state, {resetForm: true}))
    };

    render() {
        return (
            <article className="article-add">
                <header>
                    <i className="icon-24-white-100 button-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                            <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/>
                        </svg>
                    </i>
                    Create a new post
                </header>
                <FormPost model={this.state.post} handleModel={this.handleModel} resetForm={this.state.resetForm}/>
                <footer>
                    {this.state.isValid ? <button onClick={this.handleSubmit} className="button-primary">Save</button>
                        : <button className="button-action">Save</button>}
                    <button onClick={this.handleReset}>Reset</button>
                </footer>
            </article>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0,
});

export default connect(mapStateToProps)(NewPost);