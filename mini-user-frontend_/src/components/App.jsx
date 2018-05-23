import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {delete_cookie, read_cookie} from 'sfcookies';
import SignUp from './SignUp';
import Icon from "@material-ui/core/es/Icon/Icon";
import axios from 'axios';
import {addUser, clearUsers, deleteUser} from "../actions";
import {connect} from 'react-redux';
import Snackbar from "@material-ui/core/es/Snackbar/Snackbar";

class App extends Component {

    handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            this.setState({snackOpen: false})
        }
        this.setState({snackOpen: false})
    };

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            adminLoggedIn: false,
            message: "",
            snackOpen: false
        }
    }

    checkAdminInCookies() {
        if (read_cookie("loggedIn") === true) {
            this.setState({adminLoggedIn: true})
        }
    }

    componentDidMount() {
        this.checkAdminInCookies();
        this.fetchApi();
    }

    deleteUser(id) {
        axios.get(`http://localhost:8080/api/delete/${id}`)
            .then(response => {
                if (response.data === 'ACCEPTED') {
                    this.setState({
                        users: this.state.users.filter((_, i) => i !== id)
                    });
                    this.props.deleteUser(id);
                    this.setState({message: "User with id " + id + " deleted successfully!", snackOpen: true});
                } else {
                    this.setState({message: "Oooops.... something went wrong. Please Try again!", snackOpen: true});
                }
            });
    }

    fetchApi() {
        axios.get('http://localhost:8080/api/users')
            .then(results => {
                return results.data
            })
            .then((users) => {
                users.map((user) => {
                    this.setState({
                        users: [...this.state.users, user]
                    });
                    this.props.addUser(user);
                })
            });
    };

    logOut() {
        delete_cookie("loggedIn");
        this.setState({adminLoggedIn: false});
        this.props.clearUsers();
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <AppBar className="appbar" position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className="classes.flex">
                            List of users
                        </Typography>
                        <div className="appbar-buttons">
                            {this.state.adminLoggedIn ?
                                <Button color="inherit" onClick={() => this.logOut()}>Logout</Button>
                                : <Button color="inherit"><Link className='link-button'
                                                                to="/signin">Login</Link></Button>}
                        </div>
                    </Toolbar>
                </AppBar>
                <div style={{"position": "relative"}}>
                    <Paper>
                        <Table>
                            <TableHead className="app-table">
                                <TableRow>
                                    <TableCell padding="dense">#ID</TableCell>
                                    <TableCell padding="dense">User name</TableCell>
                                    <TableCell padding="dense">email</TableCell>
                                    <TableCell padding="dense"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.users.map(user => {
                                    return (
                                        <TableRow key={user.id} hover={true}>
                                            <TableCell padding="dense">{user.id}</TableCell>
                                            <TableCell padding="dense">{user.userName}</TableCell>
                                            <TableCell padding="dense">{user.email}</TableCell>
                                            <TableCell padding="dense">
                                                <Icon data-id={user.id}
                                                      onClick={event => this.deleteUser(event.target.getAttribute("data-id"))}
                                                >delete</Icon>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.snackOpen}
                        autoHideDuration={4000}
                        onClose={this.handleCloseSnack}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.state.message}</span>}
                    />
                </div>
                {this.state.adminLoggedIn
                    ? <SignUp/>
                    : <div></div>}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: state
    }
}

export default connect(mapStateToProps, {addUser, deleteUser, clearUsers})(App);