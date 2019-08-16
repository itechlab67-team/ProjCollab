import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import dev from '../../assets/img/for-developers-img.svg';
import designer from '../../assets/img/for-designers-img.svg';
import startupers from '../../assets/img/for-startupers-img.svg';
import you from '../../assets/img/for-you-img.svg';

import './MainPage.sass';

export default class MainPage extends Component {
    render() {
        return(
            <>
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
                        <Link to='/projects'><button type='link' className='main-page-main__button blue-button'>Discover the projects</button></Link>
                        </div>
                    </main>
                </div>
            </div>
            <div className='main-page-everyone-wrap'>
                <div className='main-page-everyone flex-col'>
                    <h2 className='main-page-everyone__headline main-page-main-text__headline'><span className='main-page-main-text__headline-t'> t</span>eamly for everyone</h2>
                    <div className='main-page-everyone-container grid'>
                        <div className='main-page-everyone-container-item flex-col'>
                            <img className='main-page-everyone-container-item__img' src={dev} alt=''/>
                            <h3 className='main-page-everyone-container-item__headline'>For developers</h3>
                            <p className='main-page-everyone-container-item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                eu tristique mauris dignissim id. Suspendisse et leo tellus. Etiam facilisis elementum justo, sed pharetra eros lacinia non.</p>
                        </div>
                        <div className='main-page-everyone-container-item flex-col'>
                            <img className='main-page-everyone-container-item__img' src={designer} alt=''/>
                            <h3 className='main-page-everyone-container-item__headline'>For designers</h3>
                            <p className='main-page-everyone-container-item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                eu tristique mauris dignissim id. Suspendisse et leo tellus. Etiam facilisis elementum justo, sed pharetra eros lacinia non.</p>
                        </div>
                        <div className='main-page-everyone-container-item flex-col'>
                            <img className='main-page-everyone-container-item__img' src={startupers} alt=''/>
                            <h3 className='main-page-everyone-container-item__headline'>For startupers</h3>
                            <p className='main-page-everyone-container-item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                eu tristique mauris dignissim id. Suspendisse et leo tellus. Etiam facilisis elementum justo, sed pharetra eros lacinia non.</p>
                        </div>
                        <div className='main-page-everyone-container-item flex-col'>
                            <img className='main-page-everyone-container-item__img' src={you} alt=''/>
                            <h3 className='main-page-everyone-container-item__headline'>For you</h3>
                            <p className='main-page-everyone-container-item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                eu tristique mauris dignissim id. Suspendisse et leo tellus. Etiam facilisis elementum justo, sed pharetra eros lacinia non.</p>
                        </div>
                    </div>
                    <Link to='/projects'><button className='main-page-everyone__button blue-button'>Join teamly</button></Link>
                </div>
            </div>
            <div className='main-page-how-wrap'>
                <div className='main-page-how flex-col'>
                <h2 className='main-page-how__headline main-page-main-text__headline'>How does i<span className='main-page-main-text__headline-t'>t</span> work</h2>

                </div>
            </div>
            <div className='main-page-make-wrap'>
                <div className='main-page-make flex-col'>
                <h2 className='main-page-make__headline main-page-main-text__headline'>Make <span className='main-page-main-text__headline-t'>t</span>he world a better</h2>
                    
                </div>
            </div>
            </>
        )
    }
}