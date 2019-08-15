import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FormsNavbar.sass';
import logo from '../../services/img/logo.svg';
import close from '../../services/img/icons/close-icon.svg';

export default class FormsNavbar extends Component {
    render() {
        return(
            <nav className='authentication-navbar flex container'>
                <Link to='/'><img src={logo} alt='logo' /></Link>
                <Link to='/'><img src={close} alt='close' /></Link>
            </nav>
        )
    }
}