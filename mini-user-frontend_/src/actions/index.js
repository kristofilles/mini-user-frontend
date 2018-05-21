import {ADD_USER} from "../constants";

export const addUser = (userName, email) => {
    const action = {
        type: ADD_USER,
        userName,
        email
    };
    console.log('user in ADD_USER', action);
    return action;
};