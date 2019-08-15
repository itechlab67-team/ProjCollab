import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/signinAction';

const signin = (state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginFailed: false
}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoginFailed: action.isLoginFailed
            }
        default:
            return state;
    }
}

export default signin;