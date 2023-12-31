import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';
import {RiServiceLine} from 'react-icons/ri';
import {AiFillContacts} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" className={activeNav==='#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BsBook /></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#contact' ? 'active' : ''}><AiFillContacts   /></a>
        </nav>
    )
}

export default Nav;