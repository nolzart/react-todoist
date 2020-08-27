import React, { useState } from 'react'
import Project from './Project'

const Projects = props => {
    const [show, setShow] = useState(false)
    const toggleShowProjects = () => setShow(!show)

    const [projects, setProjects] = useState([
        { name: 'Todoist' },
        { name: 'Social media' },
        { name: 'Eccommerce' },
        { name: 'Pomodoro' },
    ])

    const addProject = () => {
        setProjects([...projects, { name: 'New project', id: projects.length }])
    }
    return (
        <div className='projects'>
            <div className="projects__interaction">
                <button className='projects__interaction--toggle' onClick={toggleShowProjects}>
                    <div>
                        <ion-icon
                            name='chevron-forward-outline'
                            class='sidebar__middle--icon'
                        ></ion-icon>
                        {props.sectionName}
                    </div>
                </button>
                <span
                    className='projects__interaction--add'
                    role='button'
                    onClick={addProject}
                >
                    <ion-icon name='add-outline'></ion-icon>
                </span>
            </div>
            <div className='projects__container'>
                {show
                    ? projects.map((pro, id) => (
                            <Project key={id} project={pro} />
                        ))
                    : ''}
            </div>
        </div>
    )
}

export default Projects
