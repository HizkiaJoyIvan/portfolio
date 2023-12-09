import React from 'react';
import './portfolio.css';
import PortfolioItem from './PortfolioItem';
import IMG1 from '../../assets/port1.png';
import IMG2 from '../../assets/port2.png';
import IMG3 from '../../assets/port3.png';
import TASKIFY from '../../assets/TASKIFY.png';
import BEEPLUS from '../../assets/BEEPLUS.png';
import UANGTUA from '../../assets/UANGTUA.png';


const data = [
    {
        id: 1,
        image: TASKIFY,
        title: 'Taskify',
        github: 'https://github.com/HizkiaJoyIvan/task-hub-webapp',
        demo: 'task-hub-webapp.vercel.app',
        isPublic: true
    },
    {
        id: 2,
        image: BEEPLUS,
        title: 'Bee Plus Institute (Intern)',
        github: '',
        demo: 'https://beeplus-ui.web.app/',
        isPublic: false
    },
    {
        id: 3,
        image: IMG1,
        title: 'Social Media Clone',
        github: 'https://github.com/HizkiaJoyIvan/social_media_clone',
        demo: '',
        isPublic: true
    },
    {
        id: 4,
        image: IMG2,
        title: 'SQL Database Web App',
        github: 'https://github.com/HizkiaJoyIvan/TBD_goodreadingDB-app',
        demo: '',
        isPublic: true
    },
    {
        id: 5,
        image: IMG3,
        title: 'Firebase Chat App',
        github: 'https://github.com/HizkiaJoyIvan/firebase-chat',
        demo: 'fir-tutorial-d6c67.web.app',
        isPublic: true
    },
    {
        id: 6,
        image: UANGTUA,
        title: 'Uangtua Desktop App',
        github: 'https://github.com/HizkiaJoyIvan/uang_tua',
        demo: '',
        isPublic: true
    },

]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo,isPublic})=>{
                        return (
                            <PortfolioItem id={id} img= {image} title={title} github={github} demo={demo} isPublic={isPublic}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;