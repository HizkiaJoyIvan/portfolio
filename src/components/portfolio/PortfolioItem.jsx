import React from 'react';

const PortfolioItem = ({id,img,title,github,demo,isPublic=true}) => {
    return (
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img style={{"objectFit": "cover"}} src={img} alt={`portfolioimg${id}`} />
            </div>
            <h3>{title}</h3>
            {isPublic && (
                <a href={github} className='btn' target='_blank'>Github</a>
            )}
            <a href={demo} className='btn' target='_blank'>Live Demo</a>
        </article>
    )
}

export default PortfolioItem;