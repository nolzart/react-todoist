import React, { useState } from 'react'

//components
import Project from './SingleProject'
import AddProject from './AddProject'
import ContextMenu from '../ContextMenu'
import ArchivedProjects from './ArchivedProjects'
import DeleteProject from './DeleteProject'

const Projects = ({ projects, sectionName }) => {
    const [show, setShow] = useState({
        showProjects: false,
        showAddProject: false,
        showContextMenu: false,
        showArchivedProjects: false,
        showDeleteProject: false,
    })

    const [mouseCoordinates, setMouseCoordinates] = useState({
        top: 0,
        left: 0,
    })
    const [projectId, setProjectId] = useState('')
    const handleMouseContext = e => {
        e.preventDefault()
        setShow({ ...show, showContextMenu: !show.showContextMenu })
        setMouseCoordinates({
            left: e.clientX + 10,
            top: e.clientY - 100,
        })
        setProjectId(e.target.id ? e.target.id : e.target.parentNode.id)
    }

    return (
        <div className='projects'>
            <AddProject show={show} setShow={setShow} />
            <DeleteProject show={show} setShow={setShow} projectId={projectId} />
            <div className='projects__interaction'>
                <button
                    className='projects__interaction--toggle'
                    onClick={() => setShow({ ...show, showProjects: !show.showProjects })}
                >
                    <div>
                        <ion-icon
                            name='chevron-forward-outline'
                            class={`sidebar__middle--icon md hydrated ${
                                show.showProjects ? 'u-rotate' : ''
                            }`}
                        ></ion-icon>
                        {sectionName}
                    </div>
                </button>
                <span
                    className='projects__interaction--add'
                    role='button'
                    onClick={() => setShow({ ...show, showAddProject: !show.showAddProject })}
                >
                    <ion-icon name='add-outline'></ion-icon>
                </span>
            </div>
            <div className='projects__container' onContextMenu={handleMouseContext}>
                <ContextMenu
                    top={mouseCoordinates.top}
                    left={mouseCoordinates.left}
                    show={show}
                    setShow={setShow}
                    projectId={projectId}
                />
                {show.showProjects ? (
                    <div>
                        {projects.map(pro =>
                            !pro.archived ? <Project key={pro.id} project={pro} /> : null
                        )}
                        <button
                            className='projects__inner--btn'
                            onClick={() =>
                                setShow({ ...show, showAddProject: !show.showAddProject })
                            }
                        >
                            <span className='projects__inner--icon'>+</span>
                            <p>Add Project</p>
                        </button>

                        <button
                            className='projects__inner--btn'
                            onClick={() =>
                                setShow({
                                    ...show,
                                    showArchivedProjects: !show.showArchivedProjects,
                                })
                            }
                        >
                            {show.showArchivedProjects
                                ? 'Hide Archived Projects'
                                : 'Archived Projects'}
                        </button>
                        <ArchivedProjects show={show.showArchivedProjects} />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Projects
