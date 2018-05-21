import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import './index.css';

import App from './components/App';
import SignUp from './components/SignUp'
import SignIn from "./components/SignIn";



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/app" component={App}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={SignIn}/>
            </Switch>
        </div>
    </BrowserRouter>

   , document.getElementById('root')
);