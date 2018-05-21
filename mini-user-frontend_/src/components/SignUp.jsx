import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: ""
        }
    }

    submitRegistration() {
        console.log("state", this.state)
    }

    render() {
        return (
            <div className="classes.container">
                <div className="signupin-pagename">Registration page</div>
                <form className="forms">
                    <FormControl className="classes.formControl">
                        <Input type="text"
                                onChange={event => this.setState({userName: event.target.value})}
                        />
                        <FormHelperText>User name</FormHelperText>
                    </FormControl>
                    <FormControl className="classes.formControl">
                        <Input type="email"
                                onChange={event => this.setState({email: event.target.value})}
                        />
                        <FormHelperText>email adress</FormHelperText>
                    </FormControl>
                    <Button variant="raised" color="primary"
                            onClick={() => this.submitRegistration()}
                    >Register</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;