import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import Skills from './Skills';

const Experience = () => {
    return (
        <section id='experience'>
            <h2>Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <div className="experience__content">
                        <Skills stack='HTML'/>
                        <Skills stack='Javascript'/>
                        <Skills stack='CSS'/>
                        <Skills stack='React.js'/>
                        <Skills stack='Python'/>
                        <Skills stack='Node.js'/>
                        <Skills stack='PostgreSQL'/>
                        <Skills stack='MongoDB'/>
                        <Skills stack='PostgreSQL'/>
                        <Skills stack='C#'/>
                        <Skills stack='Next.js'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;