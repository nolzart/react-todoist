import React from 'react'

const Project = ({project}) => {
    return (
        <section className="project">
            <span className="project__name">{project.name}</span>
        </section>
    )
}

export default Project
