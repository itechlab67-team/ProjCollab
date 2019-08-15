import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../redux/actions/signinAction';
import Authentication from '../../components/Authentication/Authentication';

class LoginForm extends Component {
    handleSubmit = data => {
        this.props.dispatch(signinUser(data));
    }
    render() {
        return(
            <Authentication headline='Log in to your account' buttonText='Log in'
                linkText='Sign up' descriptionText={`Don't have an account?`} link='/join'
                onSubmit={this.handleSubmit} />
        )
    }
}

const mapStateToProps = state => {
    const { isLoginPending, isLoginSuccess, isLoginFailed } = state.login;
    console.log(state);
    return { isLoginPending, isLoginSuccess, isLoginFailed };
}

export default connect(mapStateToProps)(LoginForm);