import {ADD_USER} from "../constants";

const userToAdd = (action) => {
    let {userName, email} = action;
    return {userName, email}
};

const USERS = (state = [], action) => {
    let users = null;
    switch (action.type) {
        case ADD_USER:
            users = [...state, userToAdd(action)];
            return users;
        default:
            return state;
    }
};

export default USERS;