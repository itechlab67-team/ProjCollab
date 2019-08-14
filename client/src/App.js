import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './containers/RegistrationForm/RegistrationForm';
import MainPage from './components/MainPage/MainPage';
import LoginForm from './containers/LoginForm/LoginForm';
import EmailConfirm from './components/EmailConfirm/EmailConfirm';
import page404 from './components/page404/page404';

import './App.sass';

export default class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                <Route exact path='/' component={ MainPage }/>
                <Route path='/projects' component={ page404 }/>
                <Route exact path='/join' component={ RegistrationForm } />
                <Route path='/join/confirm/' component={ EmailConfirm }/>
                <Route path='/login' component={ LoginForm }/>
                <Route component={ page404 }/>
                </Switch>
            </Router>
        )
    }
}
