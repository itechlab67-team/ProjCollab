import axios from 'axios';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNOUT_USER = 'SIGNOUT_USER';

export const signupSuccess = isSignupSuccess => ({
    type: SIGNUP_SUCCESS,
    isSignupSuccess
})

export const signupFailed = isSignupFailed => ({
    type: SIGNUP_FAILED,
    isSignupFailed,
})

export const signupUser = ({ email, password }) => dispatch => {
    return axios.post('https://localhost:8000/join', { email, password })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            return { status: dispatch(signupSuccess(true)) };
        })
        .catch(err => {
            return { status: dispatch(signupFailed(true)), err: err.response.data.error };
        })
}

export const signoutUser = () => {
    localStorage.removeItem('token');
    return { type: SIGNOUT_USER }
}