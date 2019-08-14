import axios from 'axios';

export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNOUT_USER = 'SIGNOUT_USER';

export const signupPenging = isSignupPending => ({
    type: SIGNUP_PENDING,
    isSignupPending
})

export const signupSuccess = isSignupSuccess => ({
    type: SIGNUP_SUCCESS,
    isSignupSuccess
})

export const signupFailed = isSignupFailed => ({
    type: SIGNUP_FAILED,
    isSignupFailed
})

export const signupUser = ({ email, password }) => dispatch => {
    dispatch(signupPenging(true))
    axios.post('http://localhost:8000/join', { email, password })
        .then(response => {
            dispatch(signupSuccess(true));
            localStorage.setItem('token', response.data.token);
        })
        .catch(err => {
            console.log(err);
            dispatch(signupFailed(true));
        })
}

export const signoutUser = () => {
    localStorage.removeItem('token');
    return { type: SIGNOUT_USER }
}