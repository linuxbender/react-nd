import React from 'react';
import {connect} from 'react-redux';

const Header = () => {
    return (
        <header className="header">
            <header>Readable</header>
            <nav>
                <div><a href="#">All Kat</a></div>
                <div className="nav-item-activ"><a href="#">Kat 1</a></div>
                <div><a href="#">Kat 2</a></div>
                <div><a href="#">Kat 3</a></div>
            </nav>
        </header>
    );
};

const mapStateToProps = (state, props) => ({
    loading: state.apiCallsInProgress > 0,
    category: state.category,
    navActiveCategory: state.navActiveCategory
});

export default connect(mapStateToProps)(Header);