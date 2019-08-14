import axios from 'axios';

export const LOGIN_PENDING = 'LOGIN_PENDDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const signinPenging = isLoginPending => ({
    type: LOGIN_PENDING,
    isLoginPending
})

export const signinSuccess = isLoginSuccess => ({
    type: LOGIN_SUCCESS,
    isLoginSuccess
})

export const signinFailed = isLoginFailed => ({
    type: LOGIN_FAILED,
    isLoginFailed
})

export const signinUser = ({ email, password }) => dispatch => {
    dispatch(signinPenging(true));
    axios.post('http://localhost:8000/login', { email, password })
        .then(response => {
            dispatch(signinSuccess(true));
            localStorage.setItem('token', response.data.token);
        }).catch(err => {
            console.error(err);
            dispatch(signinFailed(true));
        })
}