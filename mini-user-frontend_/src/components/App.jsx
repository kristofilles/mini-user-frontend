import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className="classes.flex">
                            List of users
                        </Typography>
                        <div className="appbar-buttons">
                            <Button color="inherit"><Link className='link-button' to="/signup">Register</Link></Button>
                            <Button color="inherit"><Link className='link-button' to="/signin">Login</Link></Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}

export default App;