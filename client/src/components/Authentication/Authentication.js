import React, { Component } from 'react';
import PassInput from '../PassInput/Passinput';
import EmailInput from '../EmailInput/EmailInput';
import OAuth from '../OAuth/OAuth';
import API_URL from '../../assets/constants/api-config';

import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import './Authentication.sass';
import FormsNavbar from '../FormsNavbar/FormsNavbar';
const socket = io(API_URL);
const networks = ['github', 'google', 'facebook'];

export default class Authentication extends Component {
    state = {
        password: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
    }
    handleUserInput = (name, value, isValid) => {
        if (name === 'email') {
            this.setState({ 'email': { value: value, isValid: isValid } });
        }
        if (name === 'password') {
            this.setState({ 'password': { value: value, isValid: isValid } });
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.password.value === '') {
            this.setState({ showPasswordError: true, passwordError: 'Please enter the password' })
        } 
        if (this.state.email.value === '') {
            this.setState({ showEmailError: true, emailError: 'Please enter the email' })
        } else {
            if (this.state.password.isValid && this.state.email.isValid) {
                this.props.onSubmit({ email: this.state.email.value, password: this.state.password.value })
            } else {
                if (!this.state.password.isValid) {
                    this.setState({ showPasswordError: true, passwordError: 'Password must contain of digit and capital letter' })
                }
                if (!this.state.email.isValid) {
                    this.setState({ showEmailError: true, emailError: 'Email is not valid' })
                }
            }
        }
    }
    handleEmailClick = () => {
        this.setState({ showEmailError: false });
    }
    handlePasswordClick = () => {
        this.setState({ showPasswordError: false });
    }
    render() {
        return(
            <div className='flex-col'>
                <FormsNavbar/>
                <div className='authentication-form-wrap flex'>
                    <form className='authentication-form flex-col' onSubmit={this.handleSubmit}>
                        <h1 className='authentication-form__headline-title'>teamly.</h1>
                        <h2 className='authentication-form__headline'>{this.props.headline}</h2>
                        <EmailInput onClick={this.handleEmailClick} onChange={this.handleUserInput} />
                        { this.state.showEmailError && <p className='form-error'>{this.state.emailError}</p> }
                        <PassInput onClick={this.handlePasswordClick} onChange={this.handleUserInput} name='password' />
                        { this.state.showPasswordError && <p className='form-error'>{this.state.passwordError}</p> }
                        <button type='submit' className='authentication-form__button blue-button'>{this.props.buttonText}</button>
                        <div className='authentication-form-icons'>{ networks.map((network, index) => <OAuth network={network} key={index} socket={socket}/> )}</div>
                        <div className='authentication-form-description flex-col'>
                            <p className='authentication-form-description__text'>{this.props.descriptionText}</p>
                            <Link to={`${this.props.link}`} style={{ textDecoration: 'none' }}><p className='authentication-form-description__link'>{this.props.linkText}</p></Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}