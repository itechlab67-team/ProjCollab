import { SIGNUP_SUCCESS, SIGNUP_FAILED, SIGNOUT_USER } from '../actions/signupAction';

const signup = (state = {
    isSignupPending: false,
    isSignupSuccess: false,
    isSignupFailed: false,
    isSignOut: false
}, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }
        case SIGNUP_FAILED:
            return {
                ...state,
                isLoginFailed: action.isLoginFailed,
            }
        case SIGNOUT_USER:
            return {
                ...state,
                isSignOut: action.isSignOut
            }
        default:
            return state;
    }
}

export default signup;