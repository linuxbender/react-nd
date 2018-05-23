import React from 'react';
import {Route} from 'react-router-dom'
import Switch from 'react-router-dom/es/Switch';
import Detail from './components/detail';
import Home from './components/home';
import FourZeroFour from './components/pages/404';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/:category/:id" component={Detail}/>
        <Route component={FourZeroFour}/>
    </Switch>
);

export default AppRoutes;