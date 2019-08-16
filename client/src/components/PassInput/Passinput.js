import React, { Component } from 'react';
import './PassInput.sass';

import hideEye from '../../assets/img/icons/eye-icon.png';

export default class PassInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputType: 'password',
            passInputClass: '',
            passIconClass: '',
            password: ''
        }
    }
    open = () => {
        this.setState({ inputType: 'text' });
    }
    hide = () => {
        this.setState({ inputType: 'password' });
    }
    handleFocus = () => {
        this.setState({ passInputClass: 'blue-pass-border', passIconClass: 'blue-icon-border' });
    }
    handleBlur = () => {
        this.setState({ passInputClass: '', passIconClass: '' });
    }
    validatePassword = value => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(value);
    }
    handlePasswordInput = e => {
        const value = e.target.value;
        this.props.onChange( e.target.name, value, this.validatePassword(value));
        this.setState({ password: value });
    }
    handleClick = () => {
        this.props.onClick();
    }
    render() {
        return(
            <div className='password-form flex'>
                <input className={`pass-input ${this.state.passInputClass} `}
                    onClick={this.handleClick}
                    onChange={this.handlePasswordInput} name={this.props.name}
                    onFocus={this.handleFocus} onBlur={this.handleBlur}
                    type={`${this.state.inputType}`} placeholder='password' />
                <div className={`pass-input__icon flex ${this.state.passIconClass} `} onMouseDown={this.open} onMouseUp={this.hide} >
                    <img className='hide-eye' src={hideEye} alt='hide' />
                </div>
            </div>
        )
    }
}
