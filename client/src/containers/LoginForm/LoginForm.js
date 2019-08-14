import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../redux/actions/signinAction';
import Authentication from '../../components/Authentication/Authentication';

/* import io from 'socket.io-client';
import API_URL from '../../services/constants/api-config';
const socket = io(API_URL);
const networks = ['github', 'google', 'facebook'];*/

class LoginForm extends Component {
    handleSubmit = data => {
        this.props.dispatch(signinUser(data));
    }
    render() {
        console.log(this.props)
        return(
            <Authentication headline='Log in to your account' buttonText='Log in'
                linkText='Sign up' descriptionText={`Don't have an account?`} link='/join'
                onSubmit={this.handleSubmit} />
        )
    }
}

const mapStateToProps = state => {
    const { isLoginPending, isLoginSuccess, isLoginFailed } = state;
    return { isLoginPending, isLoginSuccess, isLoginFailed };
}

export default connect(mapStateToProps)(LoginForm);