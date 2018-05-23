import {ADD_USER, DELETE_USER} from "../constants";

export const addUser = (user) => {
    let {id, userName, email} = user;
    const action = {
        type: ADD_USER,
        id, userName, email
    };
    console.log('action in addUser', action);
    return action;
};

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id
    };
};
