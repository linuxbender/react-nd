import React from 'react';
import {connect} from 'react-redux';
import {createNewPost} from '../../actions/postActions';
import {mapDropDownCategory} from '../../utils/mapHelper';
import {uuidv4} from '../../utils/numberHelper';
import SelectInput from './SelectInput';

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.post;
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleChangeCategory = event => {
        this.setState({category: event.target.value});
    };

    handleSubmit = event => {
        this.setState({id: uuidv4(), timestamp: Date.now()}, () => this.props.dispatch(createNewPost(this.state)));
        event.preventDefault();
    };

    handleChancel = event => {
        this.props.handleNotification(event);
    };

    componentWillReceiveProps(nextProps) {
        this.setState({category: nextProps.activeCategory});
    }

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
                <div className="article-content">
                    <div className="form-group">
                        <label>Title: <span>*</span></label>
                        <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                        <label>
                            Author:
                            <i className="icon-16-green-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                    <path fillRule="evenodd" d="M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z"/>
                                </svg>
                            </i>
                        </label>
                        <input name="author" type="text" value={this.state.author} onChange={this.handleChange}/>

                        <label>
                            Category:
                            <i className="icon-12-blue-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                                    <path fillRule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z"/>
                                </svg>
                            </i>
                        </label>
                        <SelectInput onChange={this.handleChangeCategory}
                                     value={this.state.category}
                                     options={this.props.category}/>
                    </div>
                    <div className="form-group">
                        <label>Content: <i className="icon-16-orange-60">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/>
                            </svg>
                        </i></label>
                        <textarea name="body" value={this.state.body} onChange={this.handleChange}/>
                    </div>
                    <footer>
                        <button className="button-primary">Save</button>
                        <button onClick={this.handleChancel}>Cancel</button>
                    </footer>
                </div>
            </article>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.apiCallsInProgress > 0,
    category: mapDropDownCategory(state.category)
});

export default connect(mapStateToProps)(EditPost);