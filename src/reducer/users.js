export const actionUsersType = {
    LOGIN: 'LOGIN',
    EMAIL: 'EMAIL',
    PASSWORD: 'PASSWORD',
    DESCRIPTION: 'DESCRIPTION'
};

const defaultState = {
    login: "",
    email: "",
    password: "",
    description: ""
};

export default function user(state = defaultState, action) {
    switch (action.type) {
        case "LOGIN":
            return {...state, login: action.payload};
            break;
        case "EMAIL":
            return {...state, email: action.payload};
            break;
        case "PASSWORD":
            return {...state, password: action.payload};
            break;
        case "DESCRIPTION":
            return {...state, description: action.payload};
            break;
        default:
            return state;
    }
}