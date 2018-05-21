import React from 'react';
import {connect} from 'react-redux';
import {updateComment} from '../../actions/commentActions';
import FormComment from './FormComment';

class EditComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editComment: props.comment, isValid: false};
    }

    handleSubmit = event => {
        this.props.dispatch(updateComment(this.state.editComment));
        this.props.handleNotification(event);
    };

    handleChancel = event => {
        this.props.handleNotification(event);
    };

    handleModel = model => {
        this.setState({editComment: model.comment, isValid: model.isValid});
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
                    Edit comment
                </header>
                <FormComment model={this.props.comment} handleModel={this.handleModel}/>
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

export default connect(mapStateToProps)(EditComment);