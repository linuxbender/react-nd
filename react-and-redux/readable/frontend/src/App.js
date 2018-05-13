import React from 'react';
import {connect} from 'react-redux';
import './styles/App.css';
import Header from "./components/common/Header";

const App = () => {
    return (
        <Header></Header>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.apiCallsInProgress > 0,
        category: state.category
    };
};

export default connect(mapStateToProps)(App);