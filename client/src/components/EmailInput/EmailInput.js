import React, { Component } from 'react';
import'./EmailInput.sass';

export default class EmailInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    validateEmail = value => {
        return /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
    }
    handleEmailInput = e => {
        const value = e.target.value;
        this.props.onChange( e.target.name, value, this.validateEmail(value));
    }
    handleClick = () => {
        this.props.onClick();
    }
    render() {
        return(
            <input className='email-input' onClick={this.handleClick}
                onChange={this.handleEmailInput}  type='email' placeholder='Email' name='email'
            />
        )
    }
}