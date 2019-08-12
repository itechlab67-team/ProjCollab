import React, { Component } from 'react';
import Authentication from '../../components/Authentication/Authentication';

/* import API_URL from '../../services/constants/api-config';
import io from 'socket.io-client';
const socket = io(API_URL);
const networks = ['github', 'google', 'facebook']; */

export default class RegistrationForm extends Component {
    handleSubmit = data => {
        console.log(data)
    }
    render() {
        return(
            <Authentication headline='Create new account' buttonText='Sign up' 
                linkText='Log in' descriptionText={`Already have an account?`} link='/login'
                onSubmit={this.handleSubmit} />
        )
    }
}