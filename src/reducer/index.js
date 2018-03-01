import {combineReducers} from 'redux';
import user from './users';
import allUsers from './allUsers';


const allReducers = combineReducers({
    user: user,
    allUsers: allUsers
});

export default allReducers;