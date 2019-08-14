import { combineReducers } from 'redux';
import signin from './loginReducer';
import signup from './signupRedcer';

const rootReducer = combineReducers({
    join: signup,
    login: signin
});

export default rootReducer;

