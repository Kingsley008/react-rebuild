import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {App, Home, Login, Register, Settlement, ShoppingCart,Purchased } from './pages/index';
import {syncHistoryWithStore} from 'react-router-redux';
import  store from './Store';

// 同步store的路由状态
const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => (
    <Router history = {history}>
        <Route path="/" component = {App}>
            <IndexRoute component = {Home}/>
            <Route path = "home" component = {Home} />
            <Route path = "login" component = {Login} />
            <Route path = "register" component = {Register} />
            <Route path = "settlement" component = {Settlement} />
            <Route path = "purchased" component = {Purchased} />
            <Route path = "shoppingCart" component = {ShoppingCart}/>
        </Route>
    </Router>
);

export default Routes;