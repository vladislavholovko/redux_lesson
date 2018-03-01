import React, {Component} from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'

import allReducers from './reducer/index';

export const store = createStore(allReducers, applyMiddleware(logger));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Screen1}/>
                        <Route exact path="/screen2" component={Screen2}/>
                        <Route exact path="/screen3" component={Screen3}/>
                        <Route exact path="/screen4" component={Screen4}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}
