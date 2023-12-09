import React from 'react';
import './header.css';
import ME from '../../assets/Profile.png';
import HeaderSocials from './HeaderSocials';
import CV from '../../assets/FirstCV.pdf';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <div className='header__info'>
                    <h5>Hello I'm</h5>
                    <h1>Hizkia Joy Ivan</h1>
                    <h5 className='text-light'>An Information Engineering Undergraduate</h5>
                    <div className='cta'>
                        <a href={CV} className='btn'>Download CV</a>
                        <a href="#contact" className='btn'>Let's Talk</a>
                    </div>
                    <HeaderSocials />
                </div>
            </div>
        </header>
    )
}

export default Header;