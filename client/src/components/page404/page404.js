import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './page404.sass';
import img404 from '../../assets/img/404image.png';

export default class page404 extends Component {
    render() {
        return(
            <div className='not-found-page-wrap flex-col'>
                <img className='not-found-page__image' src={img404} alt='not found'/>
                <p className='not-found-page__text'>Page not found</p>
                <Link to='/'><button className='not-found-page__button blue-button'>Start screen</button></Link>
            </div>
        )
    }
}