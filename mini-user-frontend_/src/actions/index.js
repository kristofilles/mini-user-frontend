import {ADD_USER, DELETE_USER, DELETE_USERS} from "../constants";

export const addUser = (user) => {
    let {id, userName, email} = user;
    return {
        type: ADD_USER,
        id, userName, email
    };
};

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id
    };
};

export const clearUsers = () => {
    return {
        type: DELETE_USERS
    }
};