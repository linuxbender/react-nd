import React from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/common/Header';
import './styles/App.css';

const App = () => {
    return (
        <div>
            <Header></Header>
            <AppRoutes/>
        </div>
    );
};

export default App;