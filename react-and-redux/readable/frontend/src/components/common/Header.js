import React from 'react';
import {connect} from 'react-redux';
import {loadPostsByCategory, loadPosts} from '../../actions/postActions';
import {navActiveCategory} from '../../actions/navActions';

const Header = ({category, activeCategory, dispatch}) => {
    const onFilterCategoryHandler = (category) => {
        if (category !== '') {
            dispatch(loadPostsByCategory(category));
        } else {
            dispatch(loadPosts());
        }
        dispatch(navActiveCategory(category));
    };
    /*const navCategory = category.map((category, index) =>
        <div key={index} className={ category.path === navActiveCategory ? 'nav-item-activ' : ''}>
            <a>{category.name}</a>
        </div>
    );*/
    return (
        <header className="header">
            <header>Readable</header>
            <nav>
                {category.map((category, index) =>
                    <div key={index}
                         onClick={() => onFilterCategoryHandler(category.path)}
                         className={category.path === activeCategory ? 'nav-item-activ' : ''}>
                        <a>{category.name}</a>
                    </div>
                )}
            </nav>
        </header>
    );
};

const mapStateToProps = (state, props) => ({
    loading: state.apiCallsInProgress > 0,
    category: state.category,
    activeCategory: state.navActiveCategory
});

export default connect(mapStateToProps)(Header);