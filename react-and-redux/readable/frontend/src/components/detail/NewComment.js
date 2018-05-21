import React from 'react';
import {connect} from 'react-redux';
import {createComment} from '../../actions/commentActions';
import {uuidv4} from '../../utils/numberHelper';
import {T_FORM_COMMENT} from '../../utils/typeHelper';
import IsValidLogo from '../common/IsValidLogo';

class NewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = T_FORM_COMMENT;
        this.state.newComment.parentId = this.props.postId
    }

    componentDidMount() {
        this.author = document.getElementById('newCommentAuthor');
        this.body = document.getElementById('newCommentBody');
    }

    handleChange = event => {
        let isValid = this.author.validity.valid && this.body.validity.valid;
        let comment = Object.assign({}, this.state.newComment, {[event.target.name]: event.target.value});
        this.setState({
            newComment: comment,
            isValid: isValid,
            isAuthorValid: this.author.validity.valid,
            isBodyValid: this.body.validity.valid
        });
    };

    handleSubmit = event => {
        console.log("TODO set parentId  form the current post");
        let comment = Object.assign({}, this.state.newComment, {id: uuidv4(), timestamp: Date.now()});
        this.setState(Object.assign({}, T_FORM_COMMENT), () => this.props.dispatch(createComment(comment)));
    };

    handleReset = () => {
        this.setState(Object.assign({}, T_FORM_COMMENT));
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
                    Create a new comment
                </header>
                <div className="article-content">
                    <div className="form-group">
                        <label>Author:
                            <i className="icon-16-green-90">
                                {this.state.isAuthorValid && <IsValidLogo/>}
                            </i>
                        </label>
                        <input id="newCommentAuthor"
                               name="author"
                               type="text"
                               minLength="3"
                               maxLength="16"
                               required="true"
                               value={this.state.newComment.author}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Content:
                            <i className="icon-16-green-90">
                                {this.state.isBodyValid && <IsValidLogo/>}
                            </i>
                        </label>
                        <textarea id="newCommentBody"
                                  name="body"
                                  minLength="8"
                                  maxLength="350"
                                  required="true"
                                  value={this.state.newComment.body}
                                  onChange={this.handleChange}/>
                    </div>
                </div>
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
    isLoading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps)(NewComment);