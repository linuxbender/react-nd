import React from 'react';
import {connect} from 'react-redux';
import {mapDropDownCategory} from '../../utils/mapHelper';
import {T_FORM_POST} from '../../utils/typeHelper';
import IsValidLogo from './IsValidLogo';
import SelectInput from './SelectInput';

class FormPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = T_FORM_POST;
        this.state.post = props.model;
    }

    componentDidMount() {
        this.title = document.getElementById('postTitle' + this.state.post.id);
        this.author = document.getElementById('postAuthor' + this.state.post.id);
        this.category = document.getElementById('postCategory' + this.state.post.id);
        this.body = document.getElementById('postBody' + this.state.post.id);
    }

    handleChange = event => {
        let isValid = this.author.validity.valid &&
            this.title.validity.valid &&
            this.category.validity.valid &&
            this.body.validity.valid;
        let post = Object.assign({}, this.state.post, {[event.target.name]: event.target.value});
        this.setState({
            post: post,
            isValid: isValid,
            isTitleValid: this.title.validity.valid,
            isAuthorValid: this.author.validity.valid,
            isCategoryValid: this.category.validity.valid,
            isBodyValid: this.body.validity.valid
        }, () => this.props.handleModel(this.state));
    };

    render() {
        return (
            <div className="article-content">
                <div className="form-group">
                    <label>Title:
                        <i className="icon-16-green-90">
                            {this.state.isTitleValid && <IsValidLogo/>}
                        </i>
                    </label>
                    <input id={'postTitle' + this.state.post.id}
                           name="title"
                           type="text"
                           minLength="3"
                           maxLength="60"
                           required="true"
                           value={this.state.post.title}
                           onChange={this.handleChange}/>
                    <label>Author:
                        <i className="icon-16-green-90">
                            {this.state.isAuthorValid && <IsValidLogo/>}
                        </i>
                    </label>
                    <input id={'postAuthor' + this.state.post.id}
                           name="author"
                           type="text"
                           minLength="3"
                           maxLength="16"
                           required="true"
                           value={this.state.post.author}
                           onChange={this.handleChange}/>
                    <label>Category:
                        <i className="icon-16-green-90">
                            {this.state.isCategoryValid && <IsValidLogo/>}
                        </i>
                    </label>
                    <SelectInput id={'postCategory' + this.state.post.id}
                                 required="true"
                                 onChange={this.handleChange}
                                 value={this.state.post.category}
                                 options={this.props.category}/>
                </div>
                <div className="form-group">
                    <label>Content:
                        <i className="icon-16-green-90">
                            {this.state.isBodyValid && <IsValidLogo/>}
                        </i>
                    </label>
                    <textarea id={'postBody' + this.state.post.id}
                              name="body"
                              minLength="8"
                              maxLength="350"
                              required="true"
                              value={this.state.post.body}
                              onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    category: mapDropDownCategory(state.category)
});

export default connect(mapStateToProps)(FormPost);