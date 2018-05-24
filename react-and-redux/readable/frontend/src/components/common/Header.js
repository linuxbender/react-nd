import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Link from 'react-router-dom/es/Link';
import {navActiveCategory} from '../../actions/navActions';
import {loadPosts, loadPostsByCategory} from '../../actions/postActions';
import {mapNavCategory} from '../../utils/mapHelper';

class Header extends React.Component {

    onFilterCategoryHandler = category => {
        if (category !== '') {
            this.props.dispatch(loadPostsByCategory(category));
            this.props.history.push(category);
        } else {
            this.props.dispatch(loadPosts());
            this.props.history.push('/')
        }
        this.props.dispatch(navActiveCategory(category));
    };

    render() {
        return (
            <header className="header">
                <header><Link to="/">Readable</Link></header>
                <nav>
                    {this.props.category.map((category, index) =>
                        <div key={index}
                             onClick={() => this.onFilterCategoryHandler(category.path)}
                             className={category.path === this.props.activeCategory ? 'nav-item-activ' : ''}>
                            <a>{category.name}</a>
                        </div>
                    )}
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.apiCallsInProgress > 0,
    category: mapNavCategory(state.category),
    activeCategory: state.navActiveCategory
});

export default withRouter(connect(mapStateToProps)(Header));