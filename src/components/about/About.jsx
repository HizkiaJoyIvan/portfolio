import React from 'react';
import './about.css';
import ME from '../../assets/profile.jpg'

const About = () => {
    return (
        <section id='about'>
            <h5 className='about__header1'>Get To Know</h5>
            <h2 className='about__header2'>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className="about__content">
                        <p>Currently studying in Gadjah Mada University, majoring in Information Engineering since 2021. I've been interested in programming especially software development in general. I usually spend my free time to explore and learn new technologies, with major focus in frontend development, backend development, and android development.</p>
                        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;