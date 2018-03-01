import {store} from "../App";
import {actionUsersType} from '../reducer/users'
import {actionAllUsersType} from '../reducer/allUsers'


export function addName(value){
    store.dispatch({
        type: actionUsersType.LOGIN,
        payload: value
    });
}

export function addEmail(value){
    store.dispatch({
        type: actionUsersType.EMAIL,
        payload: value
    });
}

export function addPassword(value){
    store.dispatch({
        type: actionUsersType.PASSWORD,
        payload: value
    });
}

export function addDescription (value){
    store.dispatch({
        type: actionUsersType.DESCRIPTION,
        payload: value
    });
}

export function addUsers(){
    let state = store.getState();

    let user = state.user;
    let allUsers = state.allUsers.allUsers;
    console.log(allUsers)
    allUsers.push(user);
    store.dispatch({
        type: actionAllUsersType.ALLUSERS,
        payload: allUsers
    });
}
