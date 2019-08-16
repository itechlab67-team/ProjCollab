import React, { Component } from 'react';
import './ProfileForm.sass';
import FormsNavbar from '../../components/FormsNavbar/FormsNavbar';
import FormInput from '../../components/FormInput/FormInput';

export default class ProfileForm extends Component {
    render() {
        return(
            <div className='profile-page-wrap'>
                <div className='profile-page flex-col'>
                    <FormsNavbar/>
                    <div className='profile-form-wrap'>
                        <form className='profile-form flex-col' onSubmit={this.handleSubmit}>
                            <h1 className='profile-form__headline-title'>Account.</h1>
                            <h2 className='profile-form__headline'>Fill in profile information</h2>
                            {/* <input /> */}
                            <FormInput inputType={`little-input`} inputPlaceholder={`Username*`} />
                            <FormInput inputType={`little-input`} inputPlaceholder={`Technology stack*`} />
                            <FormInput inputType={`big-input`} inputPlaceholder={`About you`} />
                            <div className='profile-form-button'>
                                <button ></button>
                            </div>
                            <div className='profile-form-spans'>
                                <div className='profile-form-spans__span'></div>
                                <div className='profile-form-spans__span'></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}