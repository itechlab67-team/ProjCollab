import React, { Component } from 'react';
import './ProfileForm.sass';
import FormsNavbar from '../../components/FormsNavbar/FormsNavbar';

export default class ProfileForm extends Component {
    render() {
        return(
            <div className='flex-col'>
                <FormsNavbar/>
                <div className='profile-form-wrap flex'>
                    <form className='profile-form flex-col' onSubmit={this.handleSubmit}>
                        <h1 className='profile-form__headline-title'>Account</h1>
                        <input className='profile-form__photo' />
                        <input className='profile-form__first-input'/>
                        <input className='profile-form__second-input'/>
                        <div className='profile-form-button'>
                            <button></button>
                        </div>
                        <div className='profile-form-spans'>
                            <div className='profile-form-spans__span'></div>
                            <div className='profile-form-spans__span'></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}