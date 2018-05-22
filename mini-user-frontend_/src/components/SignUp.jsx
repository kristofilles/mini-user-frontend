import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            open: false,
            message: ""
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    submitRegistration() {
        console.log("state", this.state);
        axios.post('http://localhost:8080/api/register', {
            userName: this.state.userName,
            email: this.state.email
        })
            .then(response => {
                console.log('registration response', response.data);
                if (response.data === 'ACEPTED') {
                    this.setState({message: "User added"});
                } else {
                    this.setState({message: "try again"})
                }
            });
    }

    render() {
        return (
            <div>
                <Button variant="fab"
                        color="inherit"
                        style={{"background-color": "#E65100"}}
                        aria-label="add"
                        className="fab-button"
                        onClick={this.handleOpen}
                >
                    <AddIcon />
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <Paper className="form-paper" elevation="12">
                        <form className="form-container">
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
                                <FormHelperText>email address</FormHelperText>
                            </FormControl>
                            <Button variant="raised" color="primary"
                                    style={{"margin-top": "10%", "margin-left": "20%", "margin-right": "20%", "background-color": "#E65100"}}
                                    onClick={() => this.submitRegistration()}
                            >Add User</Button>
                        </form>
                    </Paper>
                </Modal>
            </div>
        )
    }
}


export default SignUp;