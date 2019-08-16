import React, { Component } from 'react';
import API_URL from '../../assets/constants/api-config';

import github from '../../assets/img/icons/github-icon.png';
import google from '../../assets/img/icons/google-icon.png';
import facebook from '../../assets/img/icons/facebook-icon.png'; 

import './OAuth.sass';

export default class OAuth extends Component {
    state = {
        user: {},
        disabled: ''
    }  
    
    componentDidMount() {
        const { socket, provider } = this.props
        socket.on(provider, user => {  
            this.popup.close()
            console.log(user)
            this.setState({user})
        })
    }
    checkPopup() {
        const check = setInterval(() => {
                const { popup } = this
                if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check)
                this.setState({ disabled: ''})
            }
        }, 1000)
    }
    createPopup = () => {
        const { network, socket } = this.props;
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const url = `${API_URL}/${network}?socketId=${socket.id}`;
        return window.open(url, '', `toolbar=no, location=no, directories=no, status=no, menubar=no, 
        scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, left=${+left}, top=${+top}`);
    }
    handleClick = () => {
        this.createPopup();
        this.checkPopup()
    }
    render() {
        const { network } = this.props;
        const icons = { github: github, google: google, facebook: facebook }
        return(
            <button type='button' className='networks-button' onClick={this.handleClick}>
                <img className='networks-icon' src={icons[network]} alt={`${network}`}/>
            </button>
        )
    }
}