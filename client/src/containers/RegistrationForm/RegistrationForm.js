import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signupUser } from '../../redux/actions/signupAction';
import Authentication from '../../components/Authentication/Authentication';

class RegistrationForm extends Component {
    state = {
        buttonText: 'Sign up',
        isRedirect: false
    }
    handleSubmit = data => {
        this.setState({ buttonText: '...wait please' })
        this.props.dispatch(signupUser(data))
            .then(value => {
                if (value.type === 'SIGNUP_SUCCESS') {
                    this.setState({ buttonText: 'Success', isRedirect: true, email: data.email });
                    console.log('Redirect!')
                } else {
                    console.log('Failed!')
                }
            })
    }
    render() {
        return(
            <>
            <Authentication headline='Create new account' buttonText={`Sign up`} //'Sign up'
                linkText='Log in' descriptionText={`Already have an account?`} link='/login'
                onSubmit={this.handleSubmit} />
                {this.state.isRedirect && <Redirect to={`/join/confirm?${this.state.email}`} />}
            </>
        )
    }
}

const mapStateToProps = state => {
    const { isSignupPending, isSignupSuccess, isSignupFailed } = state.join;
    return { isSignupPending, isSignupSuccess, isSignupFailed };
}

export default connect(mapStateToProps)(RegistrationForm);