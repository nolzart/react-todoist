import React from 'react'
const Project = ({ project }) => {
    return (
        <section className='project' role='button' id={project.id} data-menu='middle'>
            <span
                className='project__icon'
                style={{ backgroundColor: project.projectColor.color }}
            ></span>
            <span className='project__name'>{project.projectName}</span>
        </section>
    )
}

export default Project
