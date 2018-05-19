import React from 'react';
import {connect} from 'react-redux';
import {createNewPost} from '../../actions/postActions';
import {mapDropDownCategory} from '../../utils/mapHelper';
import {uuidv4} from '../../utils/numberHelper';
import {T_Post} from '../../utils/typeHelper';
import SelectInput from '../common/SelectInput';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = T_Post;
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

    handleReset = event => {
        this.setState(Object.assign({}, T_Post));
    };

    componentWillReceiveProps(nextProps) {
        this.setState({category: nextProps.activeCategory});
    }

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
                <form onSubmit={this.handleSubmit} name="newForm">
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
                            <input name="author" type="text" value={this.state.author}
                                   onChange={this.handleChange}/>
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
                    </div>
                    <footer>
                        <button type="submit" className="button-primary">Save</button>
                        <button onClick={this.handleReset}>Reset</button>
                    </footer>
                </form>
            </article>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.apiCallsInProgress > 0,
    category: mapDropDownCategory(state.category),
    activeCategory: state.navActiveCategory
});

export default connect(mapStateToProps)(NewPost);