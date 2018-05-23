import {ADD_USER, DELETE_USER, DELETE_USERS} from "../constants";

let user = {
    id: null,
    userName: null,
    email: null
};

const removeById = (state = [], id) => {
    return state.filter(user => user.id != id);
};

const users = (state = [], action) => {
    let users = null;
    switch (action.type) {
        case ADD_USER:
            const {id, userName, email} = action;
            user = {id, userName, email};
            users = [...state, user];
            return users;
        case DELETE_USER:
            users = removeById(state, action.id);
            return users;
        case DELETE_USERS:
            users = [];
            return users;
        default:
            return state;
    }
};

export default users;