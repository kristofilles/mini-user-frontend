import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';

import App from './components/App';
import SignUp from './components/SignUp'
import SignIn from "./components/SignIn";
import {read_cookie} from "sfcookies";
import reducer from './reducers';

export const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => (
        read_cookie("loggedIn") === true
            ? <Component {...props} />
            : <Route to="/signin" component={SignIn}/>
    )}/>
};

const STORE = createStore(reducer);

ReactDOM.render(
    <Provider store={STORE}>
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" component={App}/>
                <Route path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);