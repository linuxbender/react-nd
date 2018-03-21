import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Base/Title';
import Button from './components/Base/Button';

const App = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title"> Welcome to React....</h1>
                </header>
                <Title text="Mein neuer Title.." />
                <p className="App-intro">To get started, edit <code> src / App.tsx</code> and save to reload.</p>
                <Button label="Hello Wolrd" disabled={true} />
            </div>
        );
};

export default App;