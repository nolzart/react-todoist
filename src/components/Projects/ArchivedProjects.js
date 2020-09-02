import React from 'react'
import { useSelector } from 'react-redux'

const ArchivedProjects = ({ show }) => {
    const projects = useSelector(state => state.projects.projects)
    return (
        <div className={`${!show ? 'u-display-none' : null}`}>
            {projects.map(project =>
                project.archived ? (
                    <section key={project.id} className='project' id={project.id} data-menu='archived'>
                        <span
                            className='project__icon'
                            style={{ backgroundColor: project.projectColor }}
                        ></span>
                        <span className='project__name'>{project.projectName}</span>
                    </section>
                ) : null
            )}
        </div>
    )
}

export default ArchivedProjects
