import React from 'react';
import {connect} from 'react-redux';
import {mapDropDownCategory} from '../../utils/mapHelper';
import {T_FORM_COMMENT} from '../../utils/typeHelper';
import IsValidLogo from '../common/IsValidLogo';

class FormComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = T_FORM_COMMENT;
        this.state.comment = props.model;
    }

    componentDidMount() {
        this.author = document.getElementById('commentAuthor' + this.state.comment.id);
        this.body = document.getElementById('commentBody' + this.state.comment.id);
    }

    handleChange = event => {
        let isValid = this.author.validity.valid && this.body.validity.valid;
        let comment = Object.assign({}, this.state.comment, {[event.target.name]: event.target.value});
        this.setState({
            comment: comment,
            isValid: isValid,
            isAuthorValid: this.author.validity.valid,
            isBodyValid: this.body.validity.valid
        }, () => this.props.handleModel(this.state));
    };

    render() {
        return (
            <div className="article-content">
                <div className="form-group">
                    <label>Author:
                        <i className="icon-16-green-90">
                            {this.state.isAuthorValid && <IsValidLogo/>}
                        </i>
                    </label>
                    <input id={'commentAuthor' + this.state.comment.id}
                           name="author"
                           type="text"
                           minLength="3"
                           maxLength="16"
                           required="true"
                           value={this.state.comment.author}
                           onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Content:
                        <i className="icon-16-green-90">
                            {this.state.isBodyValid && <IsValidLogo/>}
                        </i>
                    </label>
                    <textarea id={'commentBody' + this.state.comment.id}
                              name="body"
                              minLength="8"
                              maxLength="350"
                              required="true"
                              value={this.state.comment.body}
                              onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    category: mapDropDownCategory(state.category)
});

export default connect(mapStateToProps)(FormComment);