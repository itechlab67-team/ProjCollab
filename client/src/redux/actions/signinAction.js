import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const signinSuccess = isLoginSuccess => ({
    type: LOGIN_SUCCESS,
    isLoginSuccess
})

export const signinFailed = isLoginFailed => ({
    type: LOGIN_FAILED,
    isLoginFailed
})

export const signinUser = ({ email, password }) => dispatch => {
    return axios.post('https://localhost:8000/login', { email, password })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            return { status: dispatch(signinSuccess(true)) };
        }).catch(err => {
            console.error(err);
            return { status: dispatch(signinFailed(true)) };
        })
}