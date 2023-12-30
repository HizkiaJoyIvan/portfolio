import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import Skills from './Skills';

const Experience = () => {
    return (
        <section id='experience'>
            <h2 className='experience_header'>Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <div className="experience__content">
                        <Skills stack='HTML'/>
                        <Skills stack='Javascript'/>
                        <Skills stack='Tailwind'/>
                        <Skills stack='React.js'/>
                        <Skills stack='Python'/>
                        <Skills stack='Node.js'/>
                        <Skills stack='MongoDB'/>
                        <Skills stack='PostgreSQL'/>
                        <Skills stack='C#'/>
                        <Skills stack='Next.js'/>
                        <Skills stack='Laravel'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;