import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
    }

    submitLogin() {
        axios.post('http://localhost:8080/api/login', {
            name: this.state.name,
            password: this.state.password
        })
            .then(response => {
                if (response.data === 'ACCEPTED') {
                    bake_cookie("loggedIn", true);
                    this.props.history.push("/")
                }
            })
    }

    render() {
        return (
            <div>
                <AppBar className="appbar" position="static">
                    <Toolbar>
                        <Typography align="center" variant="title" color="inherit" className="form-name">
                            Log in page
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper className="form-paper" elevation="12">
                    <form className="form-container">
                        <FormControl className="classes.formControl">
                            <Input type="text"
                                   onChange={event => this.setState({name: event.target.value})}
                            />
                            <FormHelperText>User name</FormHelperText>
                        </FormControl>
                        <FormControl className="classes.formControl">
                            <Input type="password"
                                   onChange={event => this.setState({password: event.target.value})}
                            />
                            <FormHelperText>password</FormHelperText>
                        </FormControl>
                        <Button variant="raised" color="primary"
                                style={{"margin-top": "10%", "margin-left": "20%", "margin-right": "20%", "background-color": "#E65100"}}
                                onClick={() => this.submitLogin()}
                        >Login</Button>
                    </form>
                </Paper>
            </div>
        )
    }
}

export default withRouter(SignIn);