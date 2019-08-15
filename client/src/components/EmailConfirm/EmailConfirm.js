import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import confirmImage from '../../services/img/confirm-email-img.png';

import './EmailConfirm.sass';

export default class EmailConfirm extends Component {
    render() {
        console.log(this.props)
        return(
            <div className='email-confirm-wrap flex'>
                <div className='email-confirm flex-col'>
                    <img src={confirmImage} alt='confirm-email-img'/>
                    <p className='email-confirm__text'>
                        You're almost there!
                        A confirmation email has been sent to {this.props.location.search.replace('?', '') + '. '} 
                        Click on the confirmation link in the email to activate your account.
                    </p>
                    <Link to='/login'><button className='email-confirm__button blue-button'>Log in</button></Link>
                </div>
            </div>
        )
    }
}