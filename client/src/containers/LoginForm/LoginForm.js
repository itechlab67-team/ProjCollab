import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signinUser } from '../../redux/actions/signinAction';
import Authentication from '../../components/Authentication/Authentication';

class LoginForm extends Component {
    state = {
        isRedirect: false
    }
    handleSubmit = data => {
        this.props.dispatch(signinUser(data))
            .then(value => {
                console.log(value)
                if (value.status.type === 'LOGIN_SUCCESS') {
                    console.log('Redirect');
                    this.setState({ isRedirect: true });
                }
            });
    }
    render() {
        return(
            <>
            <Authentication headline='Log in to your account' buttonText='Log in'
                linkText='Sign up' descriptionText={`Don't have an account?`} link='/join'
                onSubmit={this.handleSubmit} />
                {this.state.isRedirect && <Redirect to={`/profile`} />}
            </>
        )
    }
}

const mapStateToProps = state => {
    const { isLoginPending, isLoginSuccess, isLoginFailed } = state.login;
    return { isLoginPending, isLoginSuccess, isLoginFailed };
}

export default connect(mapStateToProps)(LoginForm);