import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/hizkia-joy-ivan/" target="_blank">
                <BsLinkedin className='header__socials-linkedin'/>
            </a>
            <a href="https://github.com/HizkiaJoyIvan" target="_blank">
                <BsGithub className='header__socials-github'/>
            </a>
        </div>
    )
}

export default HeaderSocials