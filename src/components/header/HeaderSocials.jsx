import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/hizkia-joy-ivan/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/mrinsectt" target="_blank"><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials