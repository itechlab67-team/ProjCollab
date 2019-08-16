import React, { Component } from 'react';
import './FormInput.sass';

export default class FormInput extends Component {
    input = () => {
        if (this.props.inputType === 'little-input') {
            return <input className={this.props.inputType} placeholder={this.props.inputPlaceholder} />
        } else {
            return <textarea className={this.props.inputType} placeholder={this.props.inputPlaceholder} />
        }
    }
    render() {
        return(
            <>
                {this.input()}
            </>
        )
    }
}