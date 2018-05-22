import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter, Redirect} from 'react-router-dom';

import './index.css';

import App from './components/App';
import SignUp from './components/SignUp'
import SignIn from "./components/SignIn";
import {read_cookie} from "sfcookies";

export const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => (
        read_cookie("loggedIn") === true
            ? <Component {...props} />
            : <Route to="/signin" component={SignIn}/>
    )} />
};

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <PrivateRoute path="/" component={App}/>
            <Route path="/signup" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);