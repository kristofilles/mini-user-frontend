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


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/users')
            .then(results => {
                return results.json();
            }).then((users) => {
                users.map((user) => {
                    return this.setState({
                        users: [...this.state.users, user]
                    })
                })
        })
    }

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
                <div>
                    <Paper>
                        <Table>
                            <TableHead className="app-table">
                                <TableRow>
                                    <TableCell padding="dense">User name</TableCell>
                                    <TableCell padding="dense">email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.users.map(user => {
                                    return (
                                        <TableRow key={user.userName} hover={true}>
                                            <TableCell padding="dense">{user.userName}</TableCell>
                                            <TableCell padding="dense">{user.email}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        )
    }

}

export default App;