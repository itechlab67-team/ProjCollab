import React, { Component } from 'react';
import PassInput from '../PassInput/Passinput';
import EmailInput from '../EmailInput/EmailInput';
import OAuth from '../OAuth/OAuth';
import API_URL from '../../services/constants/api-config';

import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import './Authentication.sass';

import logo from '../../services/img/logo.svg';
import close from '../../services/img/icons/close-icon.svg';
const socket = io(API_URL);
const networks = ['github', 'google', 'facebook'];

export default class Authentication extends Component {
    state = {
        formIsValid: false
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
        this.props.onSubmit(this.state);
    }
    render() {
        return(
            <div className='flex-col'>
                <nav className='authentication-navbar flex container'>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    <Link to='/'><img src={close} alt='close' /></Link>
                </nav>
                <div className='authentication-form-wrap flex'>
                    <form className='authentication-form flex-col' onSubmit={this.handleSubmit}>
                        <h1 className='authentication-form__headline-title'>teamly.</h1>
                        <h2 className='authentication-form__headline'>{this.props.headline}</h2>
                        <EmailInput onChange={this.handleUserInput} />
                        <PassInput onChange={this.handleUserInput} name='password' />
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