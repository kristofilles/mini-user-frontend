import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }

    submitLogin() {
        console.log("state", this.state);
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
                                   onChange={event => this.setState({userName: event.target.value})}
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

export default SignIn;