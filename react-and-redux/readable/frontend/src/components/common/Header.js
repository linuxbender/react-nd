import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router-dom/es/Link';
import {navActiveCategory} from '../../actions/navActions';
import {loadPosts, loadPostsByCategory} from '../../actions/postActions';
import {mapNavCategory} from '../../utils/mapHelper';

const Header = ({category, activeCategory, dispatch}) => {
    const onFilterCategoryHandler = category => {
        if (category !== '') {
            dispatch(loadPostsByCategory(category));
        } else {
            dispatch(loadPosts());
        }
        dispatch(navActiveCategory(category));
    };
    return (
        <header className="header">
            <header><Link to="/">Readable</Link></header>
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

const mapStateToProps = (state) => ({
    loading: state.apiCallsInProgress > 0,
    category: mapNavCategory(state.category),
    activeCategory: state.navActiveCategory
});

export default connect(mapStateToProps)(Header);