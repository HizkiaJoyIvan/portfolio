import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';

const Skills = ({stack, level}) => {
    return (
        <article className='experience__details'>
            <BsPatchCheckFill />
            <div className="experience__stack">
                <h4>{stack}</h4>
                <small className='text-light'>{level}</small>
            </div>
        </article>
    )
}

export default Skills;