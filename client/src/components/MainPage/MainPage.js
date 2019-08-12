import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../services/img/logo.svg';
import './MainPage.sass';

export default class MainPage extends Component {
    render() {
        return(
            <div className='main-page-wrap'>
                <div className='main-page flex-col'>
                    <nav className='main-page-navbar flex container'>
                        <a href='/'><img src={logo} alt='logo' /></a>
                        <ul className='main-page-navbar-items flex'>
                            <li className='main-page-navbar__item'>Projects</li>
                            <li className='main-page-navbar__item'>How does it work?</li>
                            <li className='main-page-navbar__item'><Link to='join' className='main-page-navbar__signup'>Sign up</Link></li>
                            <li className='main-page-navbar__item'><Link to='login' className='main-page-navbar__login'>Log in</Link></li>
                        </ul>
                    </nav>
                    <main className='main-page-main flex-col'>
                        <div className='main-page-main-text flex-col'> 
                            <h1 className='main-page-main-text__headline'>Ideas bring 
                                <span className='main-page-main-text__headline-t'> t</span>ogether</h1>
                            <p className='main-page-main-text__description'>
                                With teamly you can find a team to realization your idea, start an open source project or a startup. 
                                Whether you are a developer, analyst, designer or copywriter, you can always join a project and make the 
                                world a better place.
                            </p>
                        <Link to='projects'><button type='link' className='main-page-main__button blue-button'>Discover the projects</button></Link>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}