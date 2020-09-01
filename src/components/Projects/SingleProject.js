import React from 'react'
const Project = ({ project }) => {
    return (
        <section className='project' role='button' id={project.id}>
            <span
                className='project__icon'
                style={{ backgroundColor: project.projectColor }}
            ></span>
            <span className='project__name'>{project.projectName}</span>
        </section>
    )
}

export default Project
