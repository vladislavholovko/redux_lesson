export const actionAllUsersType = {
   ALLUSERS: 'ALLUSERS'
};

const defaultState = {
    allUsers: []
};

export default function allUsers(state = defaultState, action) {
    switch (action.type) {
        case "ALLUSERS":
            return {...state, allUsers: action.payload};
            break;
        default:
            return state;
    }
}