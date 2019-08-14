import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/signupAction';
import Authentication from '../../components/Authentication/Authentication';

/* import API_URL from '../../services/constants/api-config';
import io from 'socket.io-client';
const socket = io(API_URL);
const networks = ['github', 'google', 'facebook']; */

class RegistrationForm extends Component {
    handleSubmit = data => {
        console.log(data);
        this.props.dispatch(signupUser(data));
    }
    render() {
        return(
            <Authentication headline='Create new account' buttonText='Sign up' 
                linkText='Log in' descriptionText={`Already have an account?`} link='/login'
                onSubmit={this.handleSubmit} />
        )
    }
}

const mapStateToProps = state => {
    // const { isSignupPending, isSignupSuccess, isSignupFailed } = state;
    // return { isSignupPending, isSignupSuccess, isSignupFailed };
    return state
}

export default connect(mapStateToProps)(RegistrationForm);