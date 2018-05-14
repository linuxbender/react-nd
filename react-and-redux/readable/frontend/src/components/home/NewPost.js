import React from 'react';
import {connect} from 'react-redux';
import {loadPostsByCategory, loadPosts} from '../../actions/postActions';
import {navActiveCategory} from '../../actions/navActions';
import SelectInput from "../common/SelectInput";

const NewPost = ({activeCategory, category, loading, dispatch}) => {
    let value =  new String(activeCategory);
    console.log(value);
    /*const onFilterCategoryHandler = (category) => {
        if (category !== '') {
            dispatch(loadPostsByCategory(category));
        } else {
            dispatch(loadPosts());
        }
        dispatch(navActiveCategory(category));
    };*/
    const onChangeCategory = () => {
        console.log('hi...' + value);
    };
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
                <form>
                    <div className="form-group">
                        <label>Title: <span>*</span></label>
                        <input name="formTitle" value=""/>

                        <label>
                            Author:
                            <i className="icon-16-green-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                    <path fillRule="evenodd" d="M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z"/>
                                </svg>
                            </i>
                        </label>
                        <input name="formAuthor" value=""/>

                        <label>
                            Category:
                            <i className="icon-12-blue-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                                    <path fillRule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z"/>
                                </svg>
                            </i>
                        </label>
                        <SelectInput value={value}
                                     onChange={onChangeCategory}
                                     defaultOption='Please...'
                                     options={category}/>
                    </div>
                    <div className="form-group">
                        <label>Content: <i className="icon-16-orange-60">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/>
                            </svg>
                        </i></label>
                        <textarea name="formContent"/>
                    </div>
                </form>
            </div>
            <footer>
                <button className="button-primary">Save</button>
                <button>Cancel</button>
            </footer>
        </article>
    );
};

const mapStateToProps = (state) => ({
    loading: state.apiCallsInProgress > 0,
    category: state.category,
    activeCategory: state.navActiveCategory
});

export default connect(mapStateToProps)(NewPost);