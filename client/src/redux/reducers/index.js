import { combineReducers } from 'redux';
import signin from './loginReducer';
import signup from './signupReducer';

const rootReducer = combineReducers({
    join: signup,
    login: signin
});

export default rootReducer;

