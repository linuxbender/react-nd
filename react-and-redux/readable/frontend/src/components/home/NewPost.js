import React from 'react';
import {connect} from 'react-redux';
import {createNewPost} from '../../actions/postActions';
import {mapDropDownCategory} from '../../utils/mapHelper';
import {uuidv4} from '../../utils/numberHelper';
import {T_FORM_POST} from '../../utils/typeHelper';
import IsValidLogo from '../common/IsValidLogo';
import SelectInput from '../common/SelectInput';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = T_FORM_POST;
    }

    componentDidMount() {
        this.title = document.getElementById('newPostTitle');
        this.author = document.getElementById('newPostAuthor');
        this.category = document.getElementById('newPostCategory');
        this.body = document.getElementById('newPostBody');
    }

    handleChange = event => {
        let isValid = this.author.validity.valid &&
            this.title.validity.valid &&
            this.category.validity.valid &&
            this.body.validity.valid;
        let post = Object.assign({}, this.state.newPost, {[event.target.name]: event.target.value});
        this.setState({
            newPost: post,
            isValid: isValid,
            isTitleValid: this.title.validity.valid,
            isAuthorValid: this.author.validity.valid,
            isCategoryValid: this.category.validity.valid,
            isBodyValid: this.body.validity.valid
        });
    };

    handleSubmit = event => {
        let post = Object.assign({}, this.state.newPost, {id: uuidv4(), timestamp: Date.now()});
        this.setState(Object.assign({}, T_FORM_POST), () => this.props.dispatch(createNewPost(post)));
    };

    handleReset = () => {
        this.setState(Object.assign({}, T_FORM_POST));
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
                <div className="article-content">
                    <div className="form-group">
                        <label>Title:
                            <i className="icon-16-green-90">
                                {this.state.isTitleValid && <IsValidLogo/>}
                            </i>
                        </label>
                        <input id="newPostTitle"
                               name="title"
                               type="text"
                               minLength="3"
                               maxLength="60"
                               required="true"
                               value={this.state.newPost.title}
                               onChange={this.handleChange}/>
                        <label>Author:
                            <i className="icon-16-green-90">
                                {this.state.isAuthorValid && <IsValidLogo/>}
                            </i>
                        </label>
                        <input id="newPostAuthor"
                               name="author"
                               type="text"
                               minLength="3"
                               maxLength="16"
                               required="true"
                               value={this.state.newPost.author}
                               onChange={this.handleChange}/>
                        <label>Category:
                            <i className="icon-16-green-90">
                                {this.state.isCategoryValid && <IsValidLogo/>}
                            </i>
                        </label>
                        <SelectInput id="newPostCategory"
                                     required="true"
                                     onChange={this.handleChange}
                                     value={this.state.newPost.category}
                                     options={this.props.category}/>
                    </div>
                    <div className="form-group">
                        <label>Content:
                            <i className="icon-16-green-90">
                                {this.state.isBodyValid && <IsValidLogo/>}
                            </i>
                        </label>
                        <textarea id="newPostBody"
                                  name="body"
                                  minLength="8"
                                  maxLength="350"
                                  required="true"
                                  value={this.state.newPost.body}
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
    category: mapDropDownCategory(state.category),
    isLoading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps)(NewPost);