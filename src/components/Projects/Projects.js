import React, { useState, useEffect } from 'react'

//components
import Project from './SingleProject'
import ModalConductor from '../ModalConductor'
import ArchivedProjects from './ArchivedProjects'

const Projects = ({ projects, sectionName }) => {
    const [show, setShow] = useState({
        showProjects: false,
        showArchivedProjects: false,
    })

    const [activeModal, setActiveModal] = useState('')

    const [mouseCoordinates, setMouseCoordinates] = useState({
        top: 0,
        left: 0,
    })
    const [projectId, setProjectId] = useState('')
    const handleMouseContext = e => {
        e.preventDefault()
        setMouseCoordinates({
            left: e.clientX + 10,
            top: e.clientY - 100,
        })
        setActiveModal(activeModal === '' ? 'CONTEXT_MENU': '' )
        setProjectId(e.target.id ? e.target.id : e.target.parentNode.id)
    }

    return (
        <div className='projects'>
            <ModalConductor
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                projectId={projectId}
                top={mouseCoordinates.top}
                left={mouseCoordinates.left}
            />
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
                <span className='projects__interaction--add' role='button' onClick={() => setActiveModal('ADD_PROJECT')}>
                    <ion-icon name='add-outline'></ion-icon>
                </span>
            </div>
            <div className='projects__container' onContextMenu={handleMouseContext}>

                {show.showProjects ? (
                    <div>
                        {projects.map(pro =>
                            !pro.archived ? <Project key={pro.id} project={pro} /> : null
                        )}
                        <button className='projects__inner--btn' onClick={() => setActiveModal('ADD_PROJECT')}>
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
